import { printMessage } from './messageModule.js'

const validateByOperationRouter = input => {
  const stringInput = input.toString().trim()

  switch(stringInput) {
    case 'up':
      printMessage('up operation')
      break
    case 'ls':
      printMessage('ls operation')
      break
    case '.exit':
      closeStdin()
      break
    default:
      printMessage('Invalid input')
  }
}

export default validateByOperationRouter
