import listeners from '../listeners'

let _isDevtoolOpen = false
let _isEnable = false
let _isDetectOpen = false
let nextScopeTimeout = null
let waitConsoleTimeout = null

const elem = document.createElement('div')

Object.defineProperty(elem, 'id', {
  get() {
    _isDetectOpen = true
  },
})

const setting = {
  waitConsole: 10,
  nextScopeInterval: 100
}

Object.seal(setting)

const detectStart = () => nextScopeTimeout = setTimeout(detectEvent, setting.nextScopeInterval)

const detectEvent = () => {
  _isDetectOpen = false
  if (console.table) console.table({ elem: elem })
  else console.log(elem)
  console.clear()
  waitConsoleTimeout = setTimeout(() => {
    if (_isDetectOpen !== _isDevtoolOpen) {
      _isDevtoolOpen = _isDetectOpen
      for (const listener of listeners) {
        if (typeof listener === 'function') listener(_isDevtoolOpen)
      }
    }
    detectStart()
  }, setting.waitConsole)
}


const Detector = {
  setting: setting,
  get isDevtoolOpen() {
    return _isDevtoolOpen
  },
  get enable() {
    return _isEnable
  },
  set enable(enable) {
    _isEnable = enable
  },
  setEnable(enable) {
    if (enable === _isEnable) return
    if (enable) {
      detectStart()
    } else {
      clearTimeout(waitConsoleTimeout)
      clearTimeout(nextScopeTimeout)
      waitConsoleTimeout = null
      nextScopeTimeout = null
    }
    _isEnable = enable
  }
}

Object.freeze(Detector)

export default Detector