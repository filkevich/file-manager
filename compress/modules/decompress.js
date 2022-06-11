import { createBrotliDecompress } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { pathValidator } from '../../validators/index.js'
import { pipeline } from 'stream'
import { resolve, parse } from 'path'

const decompress = args => {
  if (args.length < 2) throw new Error('Wrong arguments quantity')

  const [ source, destination ] = args
  const { normalizedPath: sourcePath, isPathExists: isSourcePathValid } = pathValidator(source)
  const { normalizedPath: destinationPath, isPathExists: isDestinationPathValid } = pathValidator(destination)

  const { name } = parse(sourcePath)
  const resolvedDestinationPath = resolve(destinationPath, name)
  const { isPathExists: isDecompressedFileExists } = pathValidator(resolvedDestinationPath)

  if (isSourcePathValid, isDestinationPathValid, !isDecompressedFileExists) {
    console.log('in block')
    const sourceStream = createReadStream(sourcePath)
    const destinationStream = createWriteStream(resolvedDestinationPath)
    const brotly = createBrotliDecompress()

    pipeline(sourceStream, brotly, destinationStream, err => { 
      if (err) throw new Error(err) 
    })
  }
  else throw new Error('There is no such directory or file already exisists')
}

export default decompress
