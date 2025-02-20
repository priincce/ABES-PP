const arr =[
      {email:"abc@gmail.com",name:"prasoon",city:"ghaziabad"},
      {email:"def@gmail.com",name:"manik",city:"shamli"},
      {email:"ghi@gmail.com",name:"gaurav",city:"ghaziabad"},
      {email:"jkl@gmail.com",name:"mohit",city:"gautam buddh nagar"},
      {email:"mno@gmail.com",name:"hemant",city:"pilibhit"},
];


const root = document.getElementById('parent');

arr.forEach((ele)=> {
      const newCard = document.createElement('div');
      newCard.className= "card";
      newCard.addEventListener('click',()=>{
            newCard.style.backgroundColor=getRandomColor();
      })

      newCard.innerHTML=`<h4>${ele.name}</h4><h6>${ele.email}</h6><p class="text">${ele.city}</p>`;
      root.appendChild(newCard);
});

const getRandomColor = (()=>{
      const r = Math.floor(Math.random()*255);
      const g = Math.floor(Math.random()*255);
      const b = Math.floor(Math.random()*255);
      return `rgb(${r},${g},${b})`;
});

const handleBackgroundColor =(()=>{
      console.log("button clicked")
      const body = document.querySelector('body');
      body.style.backgroundColor = getRandomColor();
//       const card = document.querySelectorAll('.card').forEach((ele)=>
// {
//       ele.style.backgroundColor = getRandomColor();
// })
      
});

const textElements = document.querySelector(".text");

// textElements.forEach((ele)=>{
      ele.addEventListener("click",(event)=>{
            console.log("para clicked")
            event.stopPropagation();
            ele.style.backgroundColor = getRandomColor();
});
// })