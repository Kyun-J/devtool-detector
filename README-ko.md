# Devtool-detector

관리자 도구의 열림/닫힘 여부를 판단하는 간단한 라이브러리 입니다.

## 설치
```
npm install --save devtool-detector
```
혹은
```
yarn add devtool-detector
```

## 사용법

### 활성화

관리자 도구 오픈 감지는, 개발 환경을 방해합니다.
따라서 최초 로드시 감지 기능이 꺼져있습니다. 감지를 시작하려면 활성화를 해야 합니다.

```js
import { getDetector } from 'devtool-detector'

const detector = getDetector()
detector.setEnable(true) // or dectector.enable = true
```

다음 예시와 같이 테스트 환경에서는 비활성화를 권장드립니다.

```js
detector.setEnable(process.env.NODE_ENV !== 'development')
```

현재 활성화 상태는 다음과 같이 확인할 수 있습니다.

```js
detector.enable
```

### 상태 확인

detector의 isDevtoolOpen 항목을 통해 현재 열림/닫힘 상태를 얻을 수 있습니다.

```js
detector.isDevtoolOpen
```

열림/닫힘시 이벤트는 다음과 같이 확인할 수 있습니다.

```js
import { getDetector, addDetectListener, removeDetectListener, removeAllDetectListener } from 'devtool-detector'

getDetector().setEnable(true)

const listener = (isDevtoolOpen) => {
  /// devtool open or close event
}

addDetectListener(listener) // regist callback

removeDetectListener(listener) // unregist callback

removeAllDetectListener() // unregist all callbacks
```

## 옵션

감지기는 console 및 debugger 2가지로 동작합니다.  
console의 설정 항목은 다음과 같습니다.
```js
{
  nextScopeInterval: number; // 탐지 간격(ms) default 100
  waitConsole: number; // console 호출 후 기다리는 시간 default 10
  clearConsole: boolean; // console 호출 후 clear 여부 default true
}
```

debugger의 설정 항목은 다음과 같습니다.
```js
{
  nextScopeInterval: number; // 탐지 간격(ms) default 100
  scopeDebugCount: number; // debugger를 반복 호출할 횟수 default 10
  waitScopeTime: boolean; // debugger호출 탐지 시간 default true
}
```

옵션은 다음과 같이 설정할 수 있습니다.
```js
import { getDetector } from 'devtool-detector'

const detector = getDetector()
detector.setting.nextScopeInterval = 1000
detector.setting.clearConsole = false
```

## 브라우저별 감지기 설정
감지기의 상세한 종류는 다음과 같습니다.
```js
'console-elem'
'console-date'
'console-reg'
'debugger'
```
다음과 같이 브라우저별로 동작할 감지기를 설정할 수 있습니다.  
이때, 반드시 `getDetector()`가 최초 호출되기 이전에만 설정할 수 있습니다.
```js
import { BrowserDetector } from 'devtool-detector'
BrowserDetector.chrome = 'console-date'
BrowserDetector.firefox = 'debugger'
```
단, 브라우저별로 동작하는 감지기가 다릅니다.  
기본값으로는 아래와 같이 설정되어 있습니다.
```js
chrome: 'debugger'
edgeLegacy: 'console-elem'
ie: 'console-elem'
safari: 'console-reg'
firefox: 'console-reg'
webkit: 'debugger'
default: 'debugger'
```
## 지원 브라우저
Chromiume Borwser  
Firefox  
Safari  
Edge(Legacy)  
ie(Polyfill required)
## Todo
브라우저/버전별 감지기 설정