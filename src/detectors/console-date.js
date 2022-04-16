import listeners from '../listeners'

let _isDevtoolOpen = false
let _isEnable = false
let _isDetectOpen = false
let nextScopeTimeout = null
let waitConsoleTimeout = null

const date = new Date()

date.toString = () => {
  _isDetectOpen = true
  return ''
};


const setting = {
  waitConsole: 10,
  nextScopeInterval: 100
}

Object.seal(setting)

const detectStart = () => nextScopeTimeout = setTimeout(detectEvent, setting.nextScopeInterval)

const detectEvent = () => {
  _isDetectOpen = false
  console.log(date)
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