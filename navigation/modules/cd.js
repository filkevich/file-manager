import { join } from 'path'
import { printCurrentDir } from '../../msg/index.js'

const cd = path => {
  const { CURRENT_DIR } = process.env

  printCurrentDir()
}

export default cd
