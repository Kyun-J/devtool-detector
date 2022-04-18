requirejs(['../index.js'], ({ getDetector, addDetectListener, BrowserDetector }) => {
  // BrowserDetector.chrome = 'console-date'
  const detector = getDetector()
  // detector.setEnable(true)
  detector.enable = true
  // detector.setting.clearConsole = false

  addDetectListener((isDevtoolOpen) => {
    if (isDevtoolOpen) {
      alert('Devtool open !!!')
      console.count('Devtool Open Count')
    } else alert('Devtool close !!!')
  })

  setInterval(() => {
    console.log(`${Date.now()} ::: Devtool open - ${detector.isDevtoolOpen
      }`)
  }, 1000)
})