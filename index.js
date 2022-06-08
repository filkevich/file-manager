import { homedir } from 'os'
import { closeStdin } from './utils/index.js'
import { printStartMsg, printExitMsg } from './msg-module/index.js'
import validateByOperationRouter from './operationRouter.js'

function runCli () {
  process.env.CURRENT_DIR = homedir
  printStartMsg()

  process.stdin
    .on('data', validateByOperationRouter)
    .on('close', printExitMsg)

  process
    .on('SIGINT', closeStdin)
}

runCli()
