console.log("manager loading .... ")
const obj = require('./teama');
const sum = require('./teamb')
console.log(`our current revenue is ${obj.revenue} with ${obj.profit}$ profit`)
console.log(sum(100, 100))
console.log("manager done ! ✅")