const username = prompt("username")
const num  = parseInt(prompt("no of subject"))

let sum=0;
let subject={};
let highsub="";
let maxi=0;

for(let i=0;i<num;i++)
{     let name = prompt("subject name");
      let x =parseInt(prompt("ii"));
      subject[name]=x;
      sum+=x;
      if(x>maxi)
      {
            maxi = x;
            highsub = name;
      }
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
console.log(highsub);

