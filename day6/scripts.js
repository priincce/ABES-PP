// console.log("hi");


// console.dir(window) => window object represents : BOM 

// document.getElementById("id-name")              null / element 
// document.getElementsByClassName("class-name")   iterable(empty array []) / elements in []
// document.getElementsByTagName("tag-name")       iterable(empty array []) / elements in []
// document.querySelector()                        null / element
// document.querySelectorAll()                     empty nodelist() / node list(array with element)
 

// const ele = document.children[0].children[1].children[1]
// const ele2 = document.children[0].children[1].children[1].children[0] ; 
// ele.style.color = "blue";
// ele2.style.color= "#8b0000";
// console.log(ele[0]);


// =>
      // =>
            // =>
                  // =>

// const outerDiv = document.querySelectorAll("div");
// outerDiv[0].style.backgroundColor = "blue";

// for(let i=1;i<outerDiv.length;i++)
// {
//       outerDiv[i].style.backgroundColor = "#8b0000";
// }

// or

const outerDiv = document.querySelector("div");
outerDiv.style.backgroundColor = "blue";

const divChilds = Array.from(outerDiv.children);
divChilds.forEach((ele)=>{
      ele.style.backgroundColor = "yellow";
})

const mapping ={
      invitation:"you are invited for event",
      reminder:"you are reminded for task x",
      notice:"you have a notice from court for case y",
      message:"you didn't get any message today from person z"
};

const divVals = document.querySelector("div");

const keys= Object.keys(mapping);
console.log(keys)
console.log(divVals.children)
for(let i = 0; i < 4; i++){
      divVals.children[i].children[0].innerHTML = keys[i];
}

Array.from(divVals.children).forEach((ch) => {
     ch.children[1].innerHTML= mapping[ch.children[0].innerHTML]
});