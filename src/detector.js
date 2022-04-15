import ElemDetector from './detectors/console-elem'
import DateDetector from './detectors/console-date'
import RegDetector from './detectors/console-reg'
import DebugDetector from './detectors/debug'

const userAgent = globalThis.navigator.userAgent

const isChrome = typeof globalThis.window.chrome !== 'undefined' || /chrome/i.test(userAgent) || /CriOS/i.test(userAgent)
const isSafari = (typeof globalThis.window.safari !== 'undefined' && (globalThis.window.safari.pushNotification.toString() === '[object SafariRemoteNotification]')) || (/safari/i.test(userAgent) && !isChrome)
const isFirefox = 'InstallTrigger' in globalThis.window || /firefox/i.test(userAgent)
const isIE = /trident/i.test(userAgent) || /msie/i.test(userAgent)
const isEdge = /edge/i.test(userAgent)
const isWebkit = /webkit/i.test(userAgent) && !isEdge

const getBrouserName = () => {
  if (isIE) return 'ie'
  if (isFirefox) return 'firefox'
  if (isEdge) return 'edge'
  if (isSafari) return 'safari'
  if (isChrome) return 'chrome'
  if (isWebkit) return 'webkit'
  return 'other'
}

const BrowserDetectorConfig = {
  chrome: 'debugger',
  edge: 'console-elem',
  ie: 'console-elem',
  safari: 'console-reg',
  firefox: 'console-reg',
  webkit: 'debugger',
  default: 'debugger'
}

Object.freeze(BrowserDetectorConfig)

export { BrowserDetectorConfig }
export const getDetector = () => {
  const detector = BrowserDetectorConfig[getBrouserName()]
  switch (detector) {
    case 'console-elem': return ElemDetector
    case 'console-date': return DateDetector
    case 'console-reg': return RegDetector
    case 'debugger':
    default: return DebugDetector
  }
}