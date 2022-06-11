import { createBrotliCompress } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { pathValidator } from '../../validators/index.js'
import { pipeline } from 'stream'
import { resolve, parse } from 'path'

const compress = args => {
  if (args.length < 2) throw new Error('Wrong arguments quantity')

  const [ source, destination ] = args
  const { normalizedPath: sourcePath, isPathExists: isSourcePathValid } = pathValidator(source)
  const { normalizedPath: destinationPath, isPathExists: isDestinationPathValid } = pathValidator(destination)

  const { name, ext } = parse(sourcePath)
  const resolvedDestinationPath = resolve(destinationPath, name + ext + '.br')

  const { isPathExists } = pathValidator(resolvedDestinationPath)

  if (isSourcePathValid, isDestinationPathValid, !isPathExists) {
    const sourceStream = createReadStream(sourcePath)
    const destinationStream = createWriteStream(resolvedDestinationPath)
    const brotly = createBrotliCompress()

    pipeline(sourceStream, brotly, destinationStream, err => { 
      if (err) throw new Error(err) 
    })
  }
  else throw new Error('There is no such directory or copmressed file already exisists')
}

export default compress
