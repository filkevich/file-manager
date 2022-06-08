import { EOL } from 'os'
import { printMessage } from '../../msg/index.js'

const getEol = () => printMessage(`Default system End-Of-Line: ${EOL}`, 'blue')

export default getEol
