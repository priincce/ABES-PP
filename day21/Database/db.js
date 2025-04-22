const {ulid} = require('ulid');
const fsPromises = require("fs/promises");

const saveProductDB = async (obj)=>{
      obj.id = ulid();
      const oldarr = await getProductArray();
      oldarr.push(obj);
      saveProductsArray(oldarr)
}

const saveProductsArray =(array)=>{
      fsPromises.writeFile("./data.json", JSON.stringify(array))
}
const getProductArray =async()=>{
      const str = await fsPromises.readFile('data.json')
      const arr = JSON.parse(str)
      return arr;
}
module.exports ={
      saveProductDB,
}