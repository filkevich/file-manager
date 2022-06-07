import { fileURLToPath } from 'url'
import { dirname } from 'path'

const getFileDirName = async (metaUrl) => {
  try {
    const __filename = fileURLToPath(metaUrl)
    const __dirname = dirname(__filename)
    return { __filename, __dirname}
  }
  catch (err) {
    throw Error(err)
  }
}

export default getFileDirName
