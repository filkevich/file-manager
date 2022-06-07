import { printMessage, showCurrentDirectory } from './messageModule.js'
import { readdir } from 'fs/promises'
import closeStdin from './utils/closeStdin.js'
import { join } from 'path'
import { EOL, cpus } from 'os'

const listFiles = async () => {
  const filesArr = await readdir(process.env.CURRENT_DIR)
  filesArr.forEach(printMessage)
}

const up = () => {
  process.env.CURRENT_DIR = join(process.env.CURRENT_DIR, '..')
  printMessage(process.env.CURRENT_DIR)
}

const getEol = () => printMessage(EOL)

const getCpus = () => cpus.forEach(printMessage)

const operations = {
  'up': up,
  'ls': listFiles,
  'os --EOL': getEol,
  'os --cpus': getCpus,
  '.exit': closeStdin,
  'default': () => printMessage('Invalid input'),
}

const validateByOperationRouter = input => {
  try {
    const property = input.toString().trim()
    operations[property] ? operations[property]() : operations.default()
  }
  catch(err) {
    printMessage('Operation failed')
  }
}

export default validateByOperationRouter
