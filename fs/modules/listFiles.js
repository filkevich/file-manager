import { EOL } from 'os'
import { readdir } from 'fs/promises'
import { printMessage, printCurrentDir } from '../../msg/index.js'

const listFiles = async () => {
  const filesArr = await readdir(process.env.CURRENT_DIR)
  const filesInOneString = filesArr.join(EOL)
  printMessage(filesInOneString, 'green')
  printCurrentDir()
}

export default listFiles
