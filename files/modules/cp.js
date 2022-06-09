import { createReadStream, createWriteStream } from 'fs'
import { pathValidator } from '../../validators/index.js'

const cp = args => {
  if (args.length < 2) throw new Error('Wrong arguments quantity')

  const [ from, to ] = args
  const { normalizedPath: fromPath, isPathExists: isFromPathValid } = pathValidator(from)
  const { normalizedPath: toPath, isPathExists } = pathValidator(to, true)

  if (isFromPathValid && isPathExists) {
    const readable = createReadStream(fromPath, { encoding: 'utf8', highWaterMark: 16 * 1024 })
    const writable = createWriteStream(toPath)
    readable.pipe(writable)
  }
  else throw new Error('There is no such directory or file')
}

export default cp
