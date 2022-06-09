import { createReadStream } from 'fs'
import { pathValidator } from '../../validators/index.js'

const cat = args => {
  if (args > 1) throw new Error('Wrong arguments quantity')

  const [ filePath ] = args
  const { normalizedPath, isPathExists } = pathValidator(filePath)

  if (isPathExists) {
    const readable = createReadStream(normalizedPath)
    readable.pipe(process.stdout)
  }
  else throw new Error('There is no such directory or file')
}

export default cat
