import printMessage from './printMessage.js'

const printCurrentDir = () => printMessage(`You are currently in ${process.env.CURRENT_DIR}`, 'blue')

export default printCurrentDir
