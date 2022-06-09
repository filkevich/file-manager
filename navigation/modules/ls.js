import { EOL } from 'os'
import { readdirSync } from 'fs'
import { printMessage } from '../../msg/index.js'

const ls = () => {
  const filesArr = readdirSync(process.env.CURRENT_DIR)
  const filesQuantity = filesArr.length

  !filesQuantity
    ? printMessage('There is no files in the directory', 'red')
    : printMessage(filesArr.join(EOL), 'yellow')
}

export default ls
