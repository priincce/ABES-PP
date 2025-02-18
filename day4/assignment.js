const username = prompt("username")
const arr=[]
const num  = parseInt(prompt("no of subject"))

let sum=0;
for(let i=0;i<num;i++)
{
      let x =parseInt(prompt("ii"));
      arr.push(x);
      sum+=x;
}
console.log(username,"get %  ",sum/num);
const pers=sum/num;
if(pers>=90)
{
      console.log("A+");
}
else if(pers>=80)
{
      console.log("A");
}
else if(pers>=70)
{
      console.log("B");
}