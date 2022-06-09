import { printMessage, printCurrentDir } from './msg/index.js'
import { ls, up, cd } from './navigation/index.js'
import { inputValidator } from './validators/index.js'
import { rn, add, rm, cp, mv, cat } from './files/index.js'
import os from './os/index.js'

const closeStdin = () => process.stdin.destroy()
const getArrInput = input => input.toString().trim().split(' ')

const OPERATIONS = {
  'up': up,
  'ls': ls,
  '.exit': closeStdin
}

const OPERATIONS_ARG = {
  'os': os,
  'cd': cd,
  'rn': rn,
  'add': add,
  'rm': rm,
  'cp': cp,
  'mv': mv,
  'cat': cat,
}

const router = input => {
  try {
    const arrInput = getArrInput(input)
    const isInputValid = inputValidator(arrInput, OPERATIONS, OPERATIONS_ARG)

    if (!isInputValid) {
      printMessage('Invalid input', 'red')
    } else {
      const [operation, ...args] = arrInput
      const isArgsEmpty = !args.length

      isArgsEmpty
        ? OPERATIONS[operation]()
        : OPERATIONS_ARG[operation](args)

      if (operation !== '.exit') printCurrentDir()
    }    
  }
  catch(err) {
    printMessage('Operation failed', 'red')
  }
}

export default router
