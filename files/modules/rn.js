import { renameSync } from 'fs'
import { join } from 'path'
import { pathValidator } from '../../validators/index.js'

const rn = args => {
  if (args.length < 2) throw new Error('Wrong arguments quantity')

  const [path, newName] = args
  const { normalizedPath: oldPath, isPathExists } = pathValidator(path)
  const newPath = join(process.env.CURRENT_DIR, newName)

  if (isPathExists) renameSync(oldPath, newPath)
  else throw new Error('There is no such file')
}

export default rn
