import getCpus from './modules/getCpus.js'
import getEol from './modules/getEol.js'
import getHomeDir from './modules/getHomeDir.js'
import getUserName from './modules/getUserName.js'
import getArchitecture from './modules/getArchitecture.js'
import { printMessage } from '../msg/index.js'

const OS_OPERATIONS = {
  '--EOL': getEol,
  '--cpus': getCpus,
  '--homedir': getHomeDir,
  '--username': getUserName,
  '--architecture': getArchitecture,
}

const os = arg => {
  const isArgValid = OS_OPERATIONS.hasOwnProperty(arg)

  !isArgValid
    ? printMessage('Invalid input', 'red')
    : OS_OPERATIONS[arg]()
}

export default os
