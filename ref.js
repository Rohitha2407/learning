require('dotenv').config();

console.log(process.env.USER_KEY);
console.log(process.env.USER_ID);
console.log(process.env.NODE_ENV);

const args = require('minimist')(process.argv.slice(2));
console.log(args['name']);


// console.log('%o', Number);


const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + y + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)

const function2 = () => console.trace()
const function1 = () => function2()
function1()

const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()


console.log('\x1b[33m%s\x1b[0m', 'hi!')


const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })