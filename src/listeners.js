const listeners = []
export default listeners
export const addDetectListener = (listener) => { listeners.push(listener) }
export const removeDetectListener = (listener) => {
  const index = listeners.indexOf(listener)
  if (index !== -1) listeners.splice(index, 1)
}
export const removeAllDetectListener = () => { array.splice(0, listeners.length) }