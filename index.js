import { homedir } from 'os'
import { closeStdin } from './utils/index.js'
import { showStartMsg, showExitMsg } from './messageModule.js'
import validateByOperationRouter from './operationRouter.js'

function runCli () {
  showStartMsg(homedir)

  process.stdin
    .on('data', validateByOperationRouter)
    .on('close', showExitMsg)

  process
    .on('SIGINT', closeStdin)
}

runCli()
