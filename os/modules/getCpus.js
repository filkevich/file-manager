import { EOL, cpus } from 'os'
import { printMessage } from '../../msg/index.js'
import { colorizeMsg } from '../../utils/index.js'

const getCpus = () => {
  const cpusList = cpus()

  const transformedCpusList = cpusList.map(cpu => {
    const { model, speed } = cpu
    const colorizedModel = colorizeMsg(model, 'yellow')
    const colorizedSpeed = colorizeMsg(speed, 'yellow')

    return `{${EOL}  model: ${colorizedModel}, ${EOL}  speed: ${colorizedSpeed} ${EOL}}`
  })

  printMessage(transformedCpusList.join(EOL))
}

export default getCpus
