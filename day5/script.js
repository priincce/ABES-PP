// console.log("hi");



// no callback 
// const sum = (a, b) => {
//       const ans = a + b;
      
//       var printPretty = (txt) => {
//             console.log("_____________");
//             console.log(txt);
//             console.log("_____________");
//       }

//       printPretty(ans);
// }


// inverson of controll when callback is used
// const sum = (a, b) =>{ // higher order
//       const ans = a + b;
//       printPretty(ans);
// }
// const printPretty = (txt) => {
//       console.log("_____________");
//       console.log(txt);
//       console.log("_____________");
// }

// sum(10, 32, printPretty);

// const obj ={
//       maths:99, 
//       eng:91,
//       hindi:80
// }

const getMetaData = () => {
      const name = prompt("enter name : ");
      console.log(name);
      const numOfSubject = parseInt(prompt("please enter number of subjects"))
      return numOfSubject;
}

const getSubject = (n)=> {
      record ={}
      for(let i = 0; i<n; i++)
      { 
            const subName = prompt("enter the name of subject")
            const marks = parseInt(`enter maks of ${subName} :`)
            record[subName]= marks
      }
      return record;
}
const getPercentage = (obj) =>
{
      let marks = Object.values(obj);
      let totalMarks = 0;
      let totalSubjects =0;

      const temp = (a)=>{
            totalMarks+=a;
            totalSubjects++;
      }

      marks.forEach(temp);
      return totalMarks/totalSubjects;
}


const getHigh = (record)=>{
      let high =0
      let highestSub = ""
      let maxScore = Object.entries((record));
      maxScore.forEach(ele => {
            if(high<ele[1])
            {
                  high = ele[0];
                  highestSub = ele[0]
            }
      });

      return highestSub;
}

const getGrades = (percentage) =>{
      const grades = [
            
            [60,'B'],
            [70, 'B+'],
            [80, 'A'],
            [90, 'A+'],
            
      ];

      let grade ='F';
      

      return grade;

}


const num = getMetaData();
const record = getSubject(num);
const percentage = getPercentage(obj);
const highestSub = getHigh(obj);
console.log(highestSub);
getGrades(percentage);
