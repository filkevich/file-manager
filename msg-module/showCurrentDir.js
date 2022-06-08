import printMessage from './printMessage.js'

const showCurrentDir = () => printMessage(`You are currently in ${process.env.CURRENT_DIR}`, 'blue')

export default showCurrentDir
