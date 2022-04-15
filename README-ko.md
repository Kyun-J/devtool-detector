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
detector.setEnable(true)
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
import { getDetector, addDetectListener, removeDetectListener } from 'devtool-detector'

getDetector().setEnable(true)

const listener = (isDevtoolOpen) => {
  /// devtool open or close event
}

addDetectListener(listener) // regist callback

removeDetectListener(listener) // unregist callback
```
