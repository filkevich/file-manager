import { writeFileSync } from 'fs'
import { join } from 'path'

const add = args => {
  if (args > 1) throw new Error('Wrong arguments quantity')

  const [fileName] = args
  const path = join(process.env.CURRENT_DIR, fileName)
  writeFileSync(path, '')
}

export default add
