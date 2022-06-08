import printMessage from './printMessage.js'
import showCurrentDir from './showCurrentDir.js'
import getNameFromArgv from '../getNameFromArgv.js'

const userName = getNameFromArgv()

const showStartMsg = () => {
  printMessage(`Welcome to the File Manager, ${userName}!`, 'red')
  showCurrentDir()
}

export default showStartMsg
