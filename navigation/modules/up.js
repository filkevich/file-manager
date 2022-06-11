import { join } from 'path'

const up = args => {
  if (args.length === 0) {
    process.env.CURRENT_DIR = join(process.env.CURRENT_DIR, '..')
  }
  else {
    throw new Error('There is no arguments needed')
  }
}

export default up
