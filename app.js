const chalk = require('chalk')
const getNotes = require('./notes')

const success = chalk.green

const msg = getNotes()
console.log(success(msg))

