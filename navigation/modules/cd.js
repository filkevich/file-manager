import { pathValidator } from '../../validators/index.js'

const cd = path => {
  const { normalizedPath, isPathExists } = pathValidator(path)

  if (isPathExists) process.env.CURRENT_DIR = normalizedPath
  else throw new Error('There is no such directory')
}

export default cd
