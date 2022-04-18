requirejs(['../index.js'], ({ getDetector, addDetectListener, BrowserDetectorConfig }) => {
  // BrowserDetectorConfig.chrome = 'console-date'
  const Detector = getDetector()
  Detector.setEnable(true)

  addDetectListener((isDevtoolOpen) => {
    if (isDevtoolOpen) {
      alert('Devtool open !!!')
      console.count('Devtool Open Count')
    } else alert('Devtool close !!!')
  })

  setInterval(() => {
    console.log(`${Date.now()} ::: Devtool open - ${Detector.isDevtoolOpen
      }`)
  }, 1000)
})