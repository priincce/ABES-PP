const mapping ={
      invitation:"you are invited for event",
      reminder:"you are reminded for task x",
      notice:"you have a notice from court for case y",
      message:"you didn't get any message today from person z"
};

const newElement = document.createElement("div");
const rootElement = document.querySelector("body");
rootElement.appendChild(newElement);

Object.entries(mapping).forEach((ele)=>{
      const newChildDiv = document.createElement("div");
      newChildDiv.style.border = '1px solid lime';
      newChildDiv.innerHTML = `<h4 style = "color:orange">${ele[0]}</h4> <p>${ele[1]}</p>`;
      newElement.appendChild(newChildDiv);
})