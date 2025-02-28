const getData = ((text)=>{
      const pr = fetch(`http://dummyjson.com/recipes/search?q=${text}`);
      pr.then((res)=>{
            const pr2 = res.json();
            pr2.then((data)=>{
                  showCards(data.recipes)
            })
      })
})
const root = document.getElementById("cards-container");
const showCards = ((dataArr)=>{
      
      root.innerHTML = ``;
      dataArr.forEach((elem) => {
            const newDiv = document.createElement('div');
            newDiv.className ="card";
            newDiv.innerHTML =`<h4>${elem.name}</h4>
                              <img src="${elem.image}" alt="">
                              <p>${elem.cuisine}</p>`;
           root.appendChild(newDiv)
      });
});

const timeOutId = null;
const handleSearch = ((e)=>{
      if(timeOutId)
            {
                  clearTimeout(timeOutId);
            }
      setTimeout(()=>{
            getData(e.target.value);
      },500);
});