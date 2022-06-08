import { homedir } from 'os'
import { printStartMsg, printExitMsg } from './msg/index.js'
import inputRouter from './inputRouter.js'

const closeStdin = () => process.stdin.destroy()
const initEnv = () => process.env.CURRENT_DIR = homedir

const runCli = () => {
  initEnv()
  printStartMsg()

  process.stdin
    .on('data', inputRouter)
    .on('close', printExitMsg)

  process
    .on('SIGINT', closeStdin)
}

runCli()
