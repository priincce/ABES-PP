const loadData = () => {
      const storedData = localStorage.getItem("userData");
      return storedData ? JSON.parse(storedData) : [];
  };
  
  let data = loadData();
  const root = document.getElementById("container");
  
  const saveData = () => {
      localStorage.setItem("userData", JSON.stringify(data));
  };
  
  const showAllCards = () => {
      root.innerHTML = "";
      data.forEach((elem, index) => {
          const card = document.createElement("div");
          card.className = "children";
          card.innerHTML = `<h6>${elem.name}</h6><p>${elem.city}</p>`;
  
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.addEventListener("click", () => handleDeleteCard(index));
  
          card.appendChild(deleteButton);
          root.appendChild(card);
      });
  };
  
  const handleDeleteCard = (index) => {
      data.splice(index, 1);
      saveData();
      showAllCards();
  };
  
  const handleFormSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value.trim();
      const name = form.name.value.trim();
      const city = form.city.value.trim();
  
      if (data.some(entry => entry.email === email)) {
          alert("Error: This email is already registered!");
          return;
      }
  
      data.push({ email, name, city });
      saveData();
      // form.reset();
      showAllCards();
  };
  
  showAllCards();
  