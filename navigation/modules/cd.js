import { pathValidator } from '../../validators/index.js'

const cd = args => {
  if (args.length > 1) throw new Error('Wrong arguments quantity')
  
  const [path] = args
  const { normalizedPath, isPathExists } = pathValidator(path)

  if (isPathExists) process.env.CURRENT_DIR = normalizedPath
  else throw new Error('There is no such directory')
}

export default cd
