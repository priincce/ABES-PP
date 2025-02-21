const arr = [
      { id: "aa", name: "prasoon", city: "delhi" },
      { id: "bb", name: "manik", city: "mumbai" },
      { id: "cc", name: "gaurav", city: "kolkata" },
      { id: "dd", name: "mohit", city: "pune" },
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
      const index = arr.findIndex((elem)=>elem.id==elemID)
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
  