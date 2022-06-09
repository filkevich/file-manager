import { rmSync } from 'fs'
import { pathValidator } from '../../validators/index.js'

const rm = args => {
  if (args.length > 1) throw new Error('Wrong arguments quantity')

  const [pathToFile] = args
  const { normalizedPath, isPathExists } = pathValidator(pathToFile)

  if (isPathExists) rmSync(normalizedPath)
  else throw new Error('There is no such file')
}

export default rm
