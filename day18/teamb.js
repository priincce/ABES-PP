
console.log("team b loading .... ")
const sum =(...rest)=>{
      
      const ans = rest.reduce((acc, elem)=>elem+acc, 0);
      return ans;
}

module.exports = sum;
console.log("team b done ✅")