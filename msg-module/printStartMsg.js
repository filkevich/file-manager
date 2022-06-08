import printMessage from './printMessage.js'
import printCurrentDir from './printCurrentDir.js'
import getNameFromArgv from '../getNameFromArgv.js'

const userName = getNameFromArgv()

const printStartMsg = () => {
  printMessage(`Welcome to the File Manager, ${userName}!`, 'red')
  printCurrentDir()
}

export default printStartMsg
