const getNameFromArgv = () => {
  const argName = process.argv[2]
  if (!argName) throw new Error('There is no passed argument!')

  const isArgNameValid = argName.startsWith('--username=')
  if (!isArgNameValid) throw new Error('The passed argument is not valid!')

  const userName = argName.slice(11, argName.length)
  return userName
}

export default getNameFromArgv
