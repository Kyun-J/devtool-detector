# Devtool-detector

A simple, lightweight library that detects whether browser devtools are open or closed.

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
detector.setEnable(true) // or dectector.enable = true
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
import { getDetector, addDetectListener, removeDetectListener, removeAllDetectListener } from 'devtool-detector'

getDetector().setEnable(true)

const listener = (isDevtoolOpen) => {
  /// devtool open or close event
}

addDetectListener(listener) // regist callback

removeDetectListener(listener) // unregist callback

removeAllDetectListener() // unregist all callbacks
```

## Options

The detector operates in two ways: console and debugger.  
console settings are as follows:
```js
{
  nextScopeInterval: number; // Detection Interval(ms) default 100
  waitConsole: number; // Time to wait after calling console default 10
  clearConsole: boolean; // Clear after console call default true
}
```

debugger settings are as follows:
```js
{
  nextScopeInterval: number; // Detection Interval(ms) default 100
  scopeDebugCount: number; // Number of times to call debugger repeatedly default 10
  waitScopeTime: boolean; // Debugger call detection time default true
}
```

Detector options can be set as follows:
```js
import { getDetector } from 'devtool-detector'

const detector = getDetector()
detector.setting.nextScopeInterval = 1000
detector.setting.clearConsole = false
```

## Browser-specific detector settings
The detailed types of detectors are as follows:
```js
'console-elem'
'console-date'
'console-reg'
'debugger'
```
Can set up the detector to work on a browser-specific basis as follows:  
At this time, it can only be set before `getDetector()` is first called.
```js
import { BrowserDetector } from 'devtool-detector'
BrowserDetector.chrome = 'console-date'
BrowserDetector.firefox = 'debugger'
```
However, each browser has a different operation detector.  
The default setting is as follows:
```js
chrome: 'debugger'
edgeLegacy: 'console-elem'
ie: 'console-elem'
safari: 'console-reg'
firefox: 'console-reg'
webkit: 'debugger'
default: 'debugger'
```

## Using in react

Very simple React Hook Function has been written in advance and can be used immediately.
## Install

```
npm i devtool-detector-hook
```

or

```
yarn add devtool-detector-hook
```

## Example

```js
import useDevtoolDetector from 'devtool-detector-hook'

function MyComp() {
  const isDevtoolOpen = useDevtoolDetector({ enable: true })

  return <span>{isDevtoolOpen ? 'open' : 'close'}</span>
}
```

## Support Browsers
Chromiume Borwser  
Firefox  
Safari  
Edge(Legacy)  
ie(Polyfill required)
## Todo
Browser/Version-Specific detector settings  
react hooks, vue mixin detector