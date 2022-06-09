import { EOL } from 'os'
import { readdirSync } from 'fs'
import { printMessage } from '../../msg/index.js'

const ls = () => {
  const filesArr = readdirSync(process.env.CURRENT_DIR)
  const filesInOneString = filesArr.join(EOL)
  printMessage(filesInOneString, 'yellow')
}

export default ls
