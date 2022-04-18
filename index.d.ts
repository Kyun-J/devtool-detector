type DevToolDetectListener = (isDevtoolOpen: boolean) => void;

type DetectorType =
  | "debugger"
  | "console-elem"
  | "console-date"
  | "console-reg";

interface _DetectorSetting {
  nextScopeInterval: number;
}

interface DebugDetectorSetting extends _DetectorSetting {
  scopeDebugCount: number;
  waitScopeTime: number;
}

interface ConsoleDetectorSetting extends _DetectorSetting {
  waitConsole: number;
  clearConsole: boolean;
}

interface _Detector {
  type: DetectorType;
  setting: _DetectorSetting;
  readonly isDevtoolOpen: boolean;
  enable: boolean;
  setEnable: (enable: boolean) => void;
}

interface DebugDetector extends _Detector {
  setting: DebugDetectorSetting;
}

interface ConsoleDetector extends _Detector {
  setting: ConsoleDetectorSetting;
}

interface BrowserDetectorConfig {
  chrome: DetectorType;
  safari: DetectorType;
  firefox: DetectorType;
  ie: DetectorType;
  edgeLegacy: DetectorType;
  default: DetectorType;
}

export {
  DevToolDetectListener,
  DetectorType,
  DebugDetector,
  ConsoleDetector,
  DebugDetectorSetting,
  ConsoleDetectorSetting,
  BrowserDetectorConfig,
}; // type export
export declare const BrowserDetector: BrowserDetectorConfig;
export const getDetector: () => DebugDetector | ConsoleDetector;
export const addDetectListener: (listener: DevToolDetectListener) => void;
export const removeDetectListener: (listener: DevToolDetectListener) => void;
export const removeAllDetectListener: () => void;
