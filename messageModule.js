import { EOL } from 'os'

const getNameFromArgv = argvArr => {
  const argName = argvArr[2]
  if (!argName) throw new Error('There is no passed argument!')

  const isArgNameValid = argName.startsWith('--username=')
  if (!isArgNameValid) throw new Error('The passed argument is not valid!')

  const userName = argName.slice(11, argName.length)
  return userName
}

const userName = getNameFromArgv(process.argv)

const printMessage = msg => process.stdout.write(msg + EOL)

const showCurrentDirectory = dirname => printMessage(`You are currently in ${dirname}`)

const showStartMsg = dirname => {
  printMessage(`Welcome to the File Manager, ${userName}!`)
  showCurrentDirectory(dirname)
}

const showExitMsg = () => printMessage(`Thank you for using File Manager, ${userName}!`)

export { printMessage, showStartMsg, showExitMsg, showCurrentDirectory }
