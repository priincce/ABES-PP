const getData = async()=>{
      const resp = await fetch("https://dummyjson.com/products")
      const data =await resp.json()
      showUi(data.products)
}

const showUi = (products)=>{
      products.forEach(({title, price})=> {
            const newDiv = document.createElement("div")
            newDiv.className = 'card'
            newDiv.innerHTML=`
            <h4>${title}</h4>
            <p>${price}</p>
            `
            root.appendChild(newDiv)
      });
}
getData();