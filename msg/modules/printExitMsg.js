import printMessage from './printMessage.js'
import { getNameFromArgv } from '../../utils/index.js'

const userName = getNameFromArgv()

const printExitMsg = () => printMessage(`Thank you for using File Manager, ${userName}!`, 'red')

export default printExitMsg