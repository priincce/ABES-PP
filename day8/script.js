const arr = [
      {email:"anuj@abes.edu.in",name:"Anuj",city:"Delhi"},
      {email:"rakesh@abes.edu.in",name:"Rakesh",city:"Mumbai"},
      {email:"mohan@abes.edu.in",name:"Mohan",city:"Hyderabad"},
      {email:"ajay@abes.edu.in",name:"Ajay",city:"Noida"},
  ];
  
const root = document.getElementById("root");
  const showCards = (newData) => {
      root.innerHTML = ``; // Clear the existing content
      newData.forEach((elem, idx) => {
          const card = document.createElement('div');
          card.className = "card";
          card.innerHTML = `
              <h4>${elem.name}</h4>
              <p>${elem.city}</p>
              <button onClick="deleteCard(event, ${idx})">Delete</button>
          `;
          root.appendChild(card);
      });
  };
  
const deleteCard = (e, elemID) => {
      const index = arr.findIndex((elem)=>elem.email==elemID)
      arr.splice(index, 1); 
      showCards(arr); 
  };
  
const handleChange = (e) => {
      const selectCity = e.target.value;
      const newData = arr.filter((elem) => {
          return elem.city === selectCity || selectCity === "";
      });
      showCards(newData);
  };

showCards(arr);

const cities = arr.map((elem)=>{
      elem.city;
})

const showOptions=()=>{
      cities.forEach((city)=>{
            const newOption = document.createElement('option')
            newOption.value = city;
            newOption.innerText = city;
            selectElement.appendChild(newOption)
      })
}
showOptions();










const handleFormSubmit = ((e)=>{
      e.preventDefault();
      // console.log(e.target[0].value);
      const isEmailExist = arr.some((elem)=>{
            return elem.email === e.target.email.value;
      });
      if(isEmailExist)
      {
            alert("mail already exist")
            return;
      }

      const newElement = {
            name:e.target.name.value,
            email:e.target.email.value,
            city:e.target.city.value,
      }

      arr.push(newElement);
      showCards(arr);

     
});




  