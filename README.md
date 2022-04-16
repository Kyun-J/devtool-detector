# Devtool-detector

Very simple detector to detect devtool open or close.  

## Install
```
npm install --save devtool-detector
```
or
```
yarn add devtool-detector
```

## How to use

### Activate

Detecting devtool open interferes with the development environment.  
Therefore, the detection function is turned off on initial loading. Activation is required to initiate detection.

```js
import { getDetector } from 'devtool-detector'

const detector = getDetector()
detector.setEnable(true)
```

Disabling is recommended in a test environment, as shown in the following example:

```js
detector.setEnable(process.env.NODE_ENV !== 'development')
```

The current activation status can be determined as follows:

```js
detector.enable
```

### Check devtool status

The isDevtoolOpen item in the detector provides the current open/closed status.

```js
detector.isDevtoolOpen
```

When opened/closed, the event can be viewed as follows:

```js
import { getDetector, addDetectListener, removeDetectListener } from 'devtool-detector'

getDetector().setEnable(true)

const listener = (isDevtoolOpen) => {
  /// devtool open or close event
}

addDetectListener(listener) // regist callback

removeDetectListener(listener) // unregist callback
```