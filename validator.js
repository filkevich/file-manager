const validator = (arrInput, OPERATIONS, OPERATIONS_ARG) => {
  const { length } = arrInput

  if (length > 2 || length < 0) return false
  if (length === 1 && arrInput[0] === '') return false

  const [ operation ] = arrInput
  if (length === 1 && !OPERATIONS.hasOwnProperty(operation)) return false
  if (length === 2 && !OPERATIONS_ARG.hasOwnProperty(operation)) return false

  return true
}

export default validator
