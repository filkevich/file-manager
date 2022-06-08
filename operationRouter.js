import { printMessage } from './msg-module/index.js'
import { listFiles, up } from './fs-module/index.js'
import { colorizeMsg } from './utils/index.js'

import closeStdin from './utils/closeStdin.js'
import { EOL, cpus } from 'os'

const getEol = () => printMessage(EOL)

const getCpus = () => {
  const cpusList = cpus()
  const transformedCpusList = cpusList.map(cpu => {
    const { model, speed } = cpu
    const colorizedModel = colorizeMsg(model, 'yellow')
    const colorizedSpeed = colorizeMsg(speed, 'yellow')

    return `{ ${EOL}  model: ${colorizedModel}, ${EOL}  speed: ${speed} ${EOL} }`
  })
  printMessage(transformedCpusList.join(EOL))
}

const operations = {
  'up': up,
  'ls': listFiles,
  'os --EOL': getEol,
  'os --cpus': getCpus,
  '.exit': closeStdin,
  'default': () => printMessage('Invalid input'),
}

const validateByOperationRouter = input => {
  try {
    const property = input.toString().trim()
    operations[property] ? operations[property]() : operations.default()
  }
  catch(err) {
    printMessage('Operation failed')
  }
}

export default validateByOperationRouter
