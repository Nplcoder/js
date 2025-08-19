const message = 'Hello World! My Name is '

const nonMessage = '     I am from Nepal     '

const capitalMessage = message.toLocaleUpperCase()
console.log(capitalMessage);

const lastFourDigits = '1234567890'
// const maskedAccountNumber = lastFourDigits.padStart(16, '*')
const maskedAccountNumber = lastFourDigits.padEnd(16, '*')

// 'My Name is Bikash'.charAt(4)
console.log('My Name is Bikash'.charAt(11));
console.log('My Name is Bikash'.charCodeAt(4));
console.log('My Name is Bikash'.charCodeAt());
console.log('My Name is Bikash'.split());
console.log('My Name is Bikash'.split(' '));
// console.log('My Name is Bikash'.split('B'));
// console.log('My Name is Bikash'.split('a'));



// const finalMessage = nonMessage.trim().toLocaleLowerCase()
// const finalMessage = nonMessage.trimStart().toLocaleLowerCase()
const finalMessage = nonMessage.trimEnd().toLocaleLowerCase()
console.log(finalMessage);
console.log(finalMessage.length)

// lastFourDigits.padStart(16, '*')
// console.log(lastFourDigits.padStart(16, '*'));

// const concatenatedString = `Last four digit of my account number is`+' '+ lastFourDigits
const templateString = `Last four digit of my account number is` .concat(' ',lastFourDigits)
const templateString2 = `Last four digit of my account number is ${lastFourDigits.padStart(16, '*')}.`

const bankBalance = 20000000
const bankbal = `I have $${bankBalance} in my account`