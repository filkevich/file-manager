import { readFileSync } from 'fs'
import { createHash } from 'crypto'
import { printMessage } from '../msg/index.js'
import { colorizeText } from '../utils/index.js'
import { pathValidator } from '../validators/index.js'

const hash = args => {
  if (args.length > 1) throw new Error('Wrong arguments quantity')

  const [ filePath ] = args
  const { normalizedPath, isPathExists } = pathValidator(filePath)

  if (isPathExists) {
    const fileBuffer = readFileSync(normalizedPath, 'utf-8')
    const hashSum = createHash('sha256')
    hashSum.update(fileBuffer)
    const hash = hashSum.digest('hex')
    printMessage(`Calculated hash of the file is: ${colorizeText(hash, 'yellow')}`)
  }
  else throw new Error('There is no such directory or file')
}

export default hash