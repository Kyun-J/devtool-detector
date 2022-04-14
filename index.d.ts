type DevToolDetectListener = (isDevtoolOpen: boolean) => void;

interface _DetectorSetting {
  scopeDebugCount: number;
  waitScopeTime: number;
  nextScopeInterval: number;
}

interface _Detector {
  setting: _DetectorSetting;
  readonly isDevtoolOpen: boolean;
  readonly enable: boolean;
  setEnable: (enable: boolean) => void;
}

declare const Detector: _Detector;

export default Detector;
export function addDetectListener(listener: DevToolDetectListener): void;
export function removeDetectListener(listener: DevToolDetectListener): void;
