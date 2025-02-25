// const fs = require("fs/promises");
// const http = require("http");

// console.log("start");
// const handleInnerCall =(()=>{
//       setTimeout(()=>{
//             console.log("Y");
//       },10000)
// })

// handleCall = (()=>{
//       console.log("M")
//       handleInnerCall();
//       console.log("N");
// });


// document.querySelector('body').addEventListener('click',handleCall)

// console.log("end")







const getData =(e)=>{
      const profile = e.target.value;
      const data = fetch(`http://api.github.com/users/${profile}`);
      
      console.log(data);

      data.then((a)=>{
            console.log("a", a);
            const data2  = a.json();

            data2.then((data)=>{
                  // console.log("data", data);
                  showUI(data);
            })
      }).catch((b)=>{
            console.log("b", b);
      });
}
function showUI (data){
      console.log(data)
      const {avatar_url, login, html_url} = data;
      const  card = document.getElementById("card");
      card.innerHTML= `<h4>${login.toUpperCase()}</h4><img src="${avatar_url}" alt ="avatar"><a href="${html_url}">view profile</a>`;
};






// const server = http.createServer(async(req, res)=>{
//       res.writeHead(200,{"content-type":"application/json"});
//       const data =await fetch("http://www.dummyjson.com/products")

//       const jsondata =await  data.json();
//       res.end(JSON.stringify(jsondata));
// })

// const port = 3000;
// server.listen(port, ()=>{
//       console.log("hello from server")
// })