type DevToolDetectListener = (isDevtoolOpen: boolean) => void;

type DetectorType =
  | "debugger"
  | "console-elem"
  | "console-date"
  | "console-reg";

interface _DetectorSetting {
  nextScopeInterval: number;
}

interface _DebugDetectorSetting extends _DetectorSetting {
  scopeDebugCount: number;
  waitScopeTime: number;
}

interface _ConsoleDetectorSetting extends _DetectorSetting {
  waitConsole: number;
}

interface _Detector {
  setting: _DetectorSetting;
  readonly isDevtoolOpen: boolean;
  readonly enable: boolean;
  setEnable: (enable: boolean) => void;
}

interface _DebugDetector extends _Detector {
  setting: _DebugDetectorSetting;
}

interface _ConsoleDetector extends _Detector {
  setting: _ConsoleDetectorSetting;
}

interface _BrowserDetectorConfig {
  chrome: DetectorType;
  safari: DetectorType;
  firefox: DetectorType;
  ie: DetectorType;
  edgeLegacy: DetectorType;
  default: DetectorType;
}

export declare const BrowserDetectorConfig: _BrowserDetectorConfig;
export const getDetector: () => _DebugDetector | _ConsoleDetector;
export const addDetectListener: (listener: DevToolDetectListener) => void;
export const removeDetectListener: (listener: DevToolDetectListener) => void;
export const removeAllDetectListener: () => void;
