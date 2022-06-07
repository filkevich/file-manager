import { fileURLToPath } from 'url'
import { dirname } from 'path'

const getFileDirName = (metaUrl) => new Promise((resolve, reject) => {
  try {
    const __filename = fileURLToPath(metaUrl)
    const __dirname = dirname(__filename)
    resolve({ __filename, __dirname})
  }
  catch (err) {
    reject(err)
  }
})

export default getFileDirName
