import listeners from '../listeners'

let _isDevtoolOpen = false
let _isEnable = false
let _DetectCounter = false
let nextScopeTimeout = null
let waitConsoleTimeout = null

const date = new Date()

date.toString = () => {
  _DetectCounter++
  return ''
};


const setting = {
  waitConsole: 10,
  nextScopeInterval: 100
}

Object.seal(setting)

const detectStart = () => nextScopeTimeout = setTimeout(detectEvent, setting.nextScopeInterval)

const detectEvent = () => {
  _DetectCounter = 0
  console.log(date)
  console.clear()
  waitConsoleTimeout = setTimeout(() => {
    const _isDetectOpen = _DetectCounter === 2
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