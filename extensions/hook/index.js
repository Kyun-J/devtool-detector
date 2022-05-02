import { getDetector, addDetectListener, removeDetectListener } from "devtool-detector"
import { useState, useEffect } from 'react'

function useDevtoolDetector(options) {
  const [isDevtoolOpen, setIsDevtoolOpen] = useState(false)

  useEffect(() => {
    if (options && options.enable) getDetector().setEnable(options.enable)
    const callback = (_isDevtoolOpen) => setIsDevtoolOpen(_isDevtoolOpen)
    addDetectListener(callback)
    return () => removeDetectListener(callback)
  }, [])

  return isDevtoolOpen
}

export default useDevtoolDetector