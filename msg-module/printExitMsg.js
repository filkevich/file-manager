import getNameFromArgv from '../getNameFromArgv.js'
import printMessage from './printMessage.js'

const userName = getNameFromArgv()

const printExitMsg = () => printMessage(`Thank you for using File Manager, ${userName}!`, 'red')

export default printExitMsg