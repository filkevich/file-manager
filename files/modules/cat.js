import { createReadStream } from 'fs'
import { pathValidator } from '../../validators/index.js'
import { printCurrentDir } from '../../msg/index.js'
import { EOL } from 'os'

const cat =  args => {
  if (args.length > 1) throw new Error('Wrong arguments quantity')

  const [ filePath ] = args
  const { normalizedPath, isPathExists } = pathValidator(filePath)

  if (isPathExists) {
    const readable = createReadStream(normalizedPath)
    readable.on('data', chunk => process.stdout.write(chunk))
    readable.on('end', () => {
      process.stdout.write(`${EOL}${EOL}`)
      printCurrentDir()
    })
  }
  else throw new Error('There is no such directory or file')
}

export default cat
