let listeners = []
export default listeners
export const addDetectListener = (listener) => { listeners.push(listener) }
export const removeDetectListener = (listener) => { listeners = this.listeners.filter(l => l !== listener) }
export const removeAllDetectListener = () => { listeners = [] }