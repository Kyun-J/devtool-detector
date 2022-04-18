import ElemDetector from './detectors/console-elem'
import DateDetector from './detectors/console-date'
import RegDetector from './detectors/console-reg'
import DebugDetector from './detectors/debug'

let _detector = null

const userAgent = (() => {
  if (globalThis.navigator) return globalThis.navigator.userAgent
  else return ''
})()

const isChrome = typeof globalThis.chrome !== 'undefined' || /chrome/i.test(userAgent) || /CriOS/i.test(userAgent)
const isSafari = (/safari/i.test(userAgent) && !isChrome) || (typeof globalThis.safari !== 'undefined' && (globalThis.safari.pushNotification.toString() === '[object SafariRemoteNotification]'))
const isFirefox = 'InstallTrigger' in globalThis || /firefox/i.test(userAgent)
const isIE = /trident/i.test(userAgent) || /msie/i.test(userAgent)
const isEdgeLegacy = /edge/i.test(userAgent)
const isWebkit = /webkit/i.test(userAgent) && !isEdgeLegacy

const BrowserDetector = {
  chrome: 'debugger',
  edgeLegacy: 'console-elem',
  ie: 'console-elem',
  safari: 'console-reg',
  firefox: 'console-reg',
  webkit: 'debugger',
  default: 'debugger'
}

Object.seal(BrowserDetector)

const getBrouserName = () => {
  if (isIE) return 'ie'
  if (isFirefox) return 'firefox'
  if (isEdgeLegacy) return 'edgeLegacy'
  if (isSafari) return 'safari'
  if (isChrome) return 'chrome'
  if (isWebkit) return 'webkit'
  return 'other'
}

const defineDetector = () => {
  const detector = BrowserDetector[getBrouserName()]
  switch (detector) {
    case 'console-elem': return ElemDetector
    case 'console-date': return DateDetector
    case 'console-reg': return RegDetector
    case 'debugger':
    default: return DebugDetector
  }
}

export { BrowserDetector }
export const getDetector = () => {
  if (_detector) return _detector
  else {
    _detector = defineDetector()
    return _detector
  }
}