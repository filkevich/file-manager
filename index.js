import { getFileDirName, customExist } from './utils/index.js'

const runCli = async () => {
  const { __dirname } = await getFileDirName(import.meta.url)

}

runCli()
