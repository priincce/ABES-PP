const arr = [10, 20 , 30]
const newArray =[]
arr.forEach((a)=>{
      newArray.push(a*2);
})

const new_Array = arr.map(a=> a*2);



// console.log(new_Array)
// console.log(newArray)

// arr.reduce((acc=0, ele, ind, complete)=>{
//       console.log(acc, ele, ind);
// })

const  ans =arr.reduce((acc, ele)=>{
      return acc*ele;
});

console.log(ans);

const newArray1 = arr.reduce((acc, ele)=>{
      acc.push(ele*2);
      return acc;
},[]);
console.log(newArray1)