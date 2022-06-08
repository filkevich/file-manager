import printMessage from './printMessage.js'
import printCurrentDir from './printCurrentDir.js'
import { getNameFromArgv } from '../../utils/index.js'

const userName = getNameFromArgv()

const printStartMsg = () => {
  printMessage(`Welcome to the File Manager, ${userName}!`, 'red')
  printCurrentDir()
}

export default printStartMsg
