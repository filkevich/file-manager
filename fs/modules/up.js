import { join } from 'path'
import { printCurrentDir } from '../../msg/index.js'

const up = () => {
  process.env.CURRENT_DIR = join(process.env.CURRENT_DIR, '..')
  printCurrentDir()
}

export default up
