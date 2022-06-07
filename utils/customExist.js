import { access, constants } from 'fs'
const { F_OK } = constants

const customExist = path => new Promise ((resolve, reject) => {
  try {
    access(path, F_OK, err => resolve(!err))
  }
  catch (err) {
    reject(err)
  }
})

export default customExist
