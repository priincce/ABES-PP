const http = require("http");
const fspromise = require("fs/promises")
PORT = 1200
const getData = async()=>{
      const resp = await fetch("https://dummyjson.com/products")
      const data =await resp.json()
      return data.products;
      
}


const getProductsHTML = (products)=>{
      let result =" "
      products.forEach(({title, price})=> {
            result+=`<div class="card">
            <h4>${title}</h4>
            <p>${price}</p>
            </div>
            `;
      });
      return result;
}

const server= http.createServer(async(req, res)=>{
      // res.writeHead(200, {message:"hi"})
      console.log("------------request recieved---------------")
      res.setHeader("content-type", "text/html")

      const page = await fspromise.readFile("./pages/homePage.html",{
            encoding:"utf-8",
      })

      const products = await getData();
      const productsHTMLCode = getProductsHTML(products);
      const newPage = page.replace("__PRODUCTS__",productsHTMLCode)
      res.end(newPage)
     
})



server.listen(PORT, ()=>{
      console.log(`listening at port ${PORT}`)
})