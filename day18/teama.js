console.log("team a loading .... ")
const add = require('./teamb');


const profit = 100;
const expenses = 20;

const revenue = add(profit, expenses);

module.exports={
      profit,
      expenses,
      revenue,
};

console.log("team a done ✅")