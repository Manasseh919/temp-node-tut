// commonJS, Every file is a module(by default)
// Modules - Encapsulated code (only share mininum)


const names = require('./4-names')

const sayHi = require('./5-Utils')


const data = require('./6-alternative-flavor')

// console.log(data)

require('./7-mind-grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)