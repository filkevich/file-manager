import { homedir } from 'os'
import { closeStdin } from './utils/index.js'
import { showStartMsg, showExitMsg } from './messageModule.js'
import validateByOperationRouter from './operationRouter.js'

function runCli () {
  process.env.CURRENT_DIR = homedir
  showStartMsg(homedir)

  process.stdin
    .on('data', input => validateByOperationRouter(input))
    .on('close', showExitMsg)

  process
    .on('SIGINT', closeStdin)
}

runCli()
