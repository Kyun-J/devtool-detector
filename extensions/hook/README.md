# React hook devtool detector

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