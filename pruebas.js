const string = 'Koxdemixa, Charxlesxx'

const arrString = string.split(',')

console.warn('arrString: ', arrString)

const arrStringTrim = arrString.map(string => string.trim())
console.warn('arrStringTrim: ', arrStringTrim)

const cleanStrings = arrStringTrim.map(string => string.replace(/x/g, ''))

console.warn('cleanStrings: ', cleanStrings)
