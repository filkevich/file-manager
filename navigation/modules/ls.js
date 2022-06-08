import { EOL } from 'os'
import { readdir } from 'fs/promises'
import { printMessage, printCurrentDir } from '../../msg/index.js'

const ls = async () => {
  const filesArr = await readdir(process.env.CURRENT_DIR)
  const filesInOneString = filesArr.join(EOL)
  printMessage(filesInOneString, 'yellow')
  printCurrentDir()
}

export default ls
