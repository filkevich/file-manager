import { join } from 'path'
import { showCurrentDir } from '../msg-module/index.js'

const up = () => {
  process.env.CURRENT_DIR = join(process.env.CURRENT_DIR, '..')
  showCurrentDir()
}

export default up
