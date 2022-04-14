import Detector, { addDetectListener } from "../index.origin.js";

Detector.setEnable(true)

addDetectListener((isDevtoolOpen) => {
  if (isDevtoolOpen) console.count('Devtool Open Count')
})

setInterval(() => {
  console.log(`${Date.now()} ::: Devtool open - ${Detector.isDevtoolOpen
    }`)
}, 1000)