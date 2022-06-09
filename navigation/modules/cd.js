import { join, isAbsolute, normalize, resolve } from 'path'
import { existsSync } from 'fs'
import { printMessage } from '../../msg/index.js'

const cd = path => {
  const isPathAbsolute = isAbsolute(path)
  const newPath = isPathAbsolute ? resolve(process.env.CURRENT_DIR, path) : join(process.env.CURRENT_DIR, path)

  const isPathExists = existsSync(newPath)

  if (isPathExists) process.env.CURRENT_DIR = normalize(newPath)
  else printMessage('Invalid input', 'red')
}

export default cd
