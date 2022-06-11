import { join } from 'path'
import { env } from 'process'
import { printInvalidInputMsg } from '../../msg/index.js'

const up = async args => {
  const isArgsValid = args.length === 0
  
  if (isArgsValid) {
    try {
      env.CURRENT_DIR = join(env.CURRENT_DIR, '..')
    }
    catch(err) {
      throw new Error(err)
    }
  }
  else printInvalidInputMsg()
}

export default up
