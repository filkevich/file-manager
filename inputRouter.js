import { printMessage } from './msg/index.js'
import { listFiles, up } from './fs/index.js'
import { getCpus, getEol, getHomeDir, getUserName, getArchitecture } from './os/index.js'

const closeStdin = () => process.stdin.destroy()
const getOperation = input => input.toString().trim()

const OPERATIONS = {
  'up': up,
  'ls': listFiles,
  'os --EOL': getEol,
  'os --cpus': getCpus,
  'os --homedir': getHomeDir,
  'os --username': getUserName,
  'os --architecture': getArchitecture,
  '.exit': closeStdin,
}

const inputRouter = input => {
  try {
    const operation = getOperation(input)
    const isOperationValid = !!OPERATIONS[operation]

    isOperationValid ? OPERATIONS[operation]() : printMessage('Invalid input', 'red')
  }
  catch(err) { printMessage('Operation failed', 'red') }
}

export default inputRouter
