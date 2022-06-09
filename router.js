import { printMessage, printCurrentDir } from './msg/index.js'
import { ls, up, cd } from './navigation/index.js'
import { inputValidator } from './validators/index.js'
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
}

const router = input => {
  try {
    const arrInput = getArrInput(input)
    const isInputValid = inputValidator(arrInput, OPERATIONS, OPERATIONS_ARG)

    if (!isInputValid) {
      printMessage('Invalid input', 'red')
    } else {
      const [operation, argument] = arrInput
      const isArgumentEmpty = !argument

      isArgumentEmpty
        ? OPERATIONS[operation]()
        : OPERATIONS_ARG[operation](argument)

      if (operation !== '.exit') printCurrentDir()
    }    
  }
  catch(err) {
    printMessage('Operation failed', 'red')
  }
}

export default router
