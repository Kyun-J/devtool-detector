let _isDevtoolOpen = false
let _isEnable = false
let listeners = []
let devtoolCheckResolve = null
let nextScopeTimeout = null

const detectWorker = new Worker(
  URL.createObjectURL(
    new Blob(
      [
        `
        onmessage = (msg) => { 
          postMessage(true);
          for (let i = 0; i < msg.data; i++) {
            debugger;
          }
          postMessage(false);
        };
        `
      ],
      { type: 'text/javascript' }
    )
  )
)

const setting = {
  scopeDebugCount: 10,
  waitScopeTime: 100,
  nextScopeInterval: 100
}

Object.seal(setting)

const detectStart = () => detectWorker.postMessage(setting.scopeDebugCount)

const detectEvent = (msg) => {
  if (msg.data) {
    new Promise((_resolve) => {
      devtoolCheckResolve = _resolve
      setTimeout(() => {
        devtoolCheckResolve(true)
      }, setting.waitScopeTime)
    }).then((isDevtoolOpen) => {
      if (isDevtoolOpen !== _isDevtoolOpen && typeof isDevtoolOpen === 'boolean') {
        _isDevtoolOpen = isDevtoolOpen
        for (const listener of listeners) {
          if (typeof listener === 'function') listener(isDevtoolOpen)
        }
      }
      nextScopeTimeout = setTimeout(() => {
        detectStart()
      }, setting.nextScopeInterval)
    })
  } else if (typeof devtoolCheckResolve === 'function') {
    devtoolCheckResolve(false)
  }
}

detectWorker.addEventListener('message', detectEvent)

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
      detectWorker.addEventListener('message', detectEvent)
      detectStart()
    } else {
      detectWorker.removeEventListener('message', detectEvent)
      clearTimeout(nextScopeTimeout)
      nextScopeTimeout = null
      if (typeof devtoolCheckResolve === 'function') devtoolCheckResolve(null)
    }
    _isEnable = enable
  }
}

Object.freeze(Detector)

export default Detector

export const addDetectListener = (listener) => { listeners.push(listener) }

export const removeDetectListener = (listener) => { listeners = this.listeners.filter(l => l !== listener) }