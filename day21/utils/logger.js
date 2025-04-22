const fs = require('fs/promises')
const saveLogs = (str)=>{
      fs.appendFile("logs.txt", str);
}

const requestLogs = (req)=>{
      const {method, url}=req;
      const date = new Date();
      saveLogs(`${date.toLocaleString()} - ${method} - ${url}`)
}

module.exports = { requestLogs }