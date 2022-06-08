import { EOL } from 'os'
import { readdir } from 'fs/promises'
import { printMessage, showCurrentDir } from '../msg-module/index.js'

const listFiles = async () => {
  const filesArr = await readdir(process.env.CURRENT_DIR)
  const filesInOneString = filesArr.join(EOL)
  printMessage(filesInOneString, 'green')
  showCurrentDir()
}

export default listFiles
