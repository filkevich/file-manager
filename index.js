import { homedir } from 'os'
import { closeStdin } from './utils/index.js'
import { showStartMsg, showExitMsg } from './msg-module/index.js'
import validateByOperationRouter from './operationRouter.js'

function runCli () {
  process.env.CURRENT_DIR = homedir
  showStartMsg()

  process.stdin
    .on('data', validateByOperationRouter)
    .on('close', showExitMsg)

  process
    .on('SIGINT', closeStdin)
}

runCli()
