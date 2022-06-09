import { renameSync } from 'fs'
import { pathValidator } from '../../validators/index.js'
import { resolve, parse } from 'path'

const mv = args => {
  if (args.length < 2) throw new Error('Wrong arguments quantity')

  const [ from, to ] = args
  const { normalizedPath: fromPath, isPathExists: isFromPathValid } = pathValidator(from)
  const { normalizedPath: toPath, isPathExists: isToPathValid } = pathValidator(to, true)

  const { name, ext } = parse(fromPath)
  const toPathWithFileName = resolve(toPath, name + ext)

  if (isFromPathValid && isToPathValid) renameSync(fromPath, toPathWithFileName)
  else throw new Error('There is no such directory or file')
}

export default mv
