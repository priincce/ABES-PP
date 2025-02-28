const getData = ((text)=>{
      const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`,{
            method:'GET',
            headers:{
                  "x-rapidapi-host": "google-map-places.p.rapidapi.com",
                  "x-rapidapi-key": "723edda640msh0437ea45db2b642p19b3dfjsnbccf771139ed"
            }
      });
      pr.then((res)=>{
            const pr2 = res.json();
            pr2.then((data)=>{
                  showLocations(data)
                  console.log(data)
            })
      })
})

const root = document.getElementById("cards-container");

const showLocations = ((dataArr)=>{
      const {predictions} =dataArr;
      root.innerHTML = ``;
      predictions.forEach((elem) => {
            const p = document.createElement('p');
            p.className ="card";
            p.innerHTML =elem.description;
           root.appendChild(p)
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
            },1000);
});