requirejs(['../index.js'], ({ getDetector, addDetectListener }) => {
  const Detector = getDetector()
  console.log(Detector)
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