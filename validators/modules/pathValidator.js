import { join, isAbsolute, normalize, resolve } from 'path'
import { existsSync } from 'fs'

const pathValidator = path => {
  const isPathAbsolute = isAbsolute(path)
  const newPath = isPathAbsolute ? resolve(process.env.CURRENT_DIR, path) : join(process.env.CURRENT_DIR, path)
  const normalizedPath = normalize(newPath)
  const isPathExists = existsSync(newPath)

  return { normalizedPath, isPathExists }
}

export default pathValidator
