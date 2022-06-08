import { EOL } from 'os'
import { colorizeMsg } from '../utils/index.js'

const printMessage = (msg, color='white') => {
  const configuredMsg = colorizeMsg(msg, color) + EOL + EOL
  process.stdout.write(configuredMsg)
}

export default printMessage
