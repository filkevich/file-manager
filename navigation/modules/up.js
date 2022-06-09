import { join } from 'path'

const up = () => process.env.CURRENT_DIR = join(process.env.CURRENT_DIR, '..')

export default up
