// const temp = ()=> {
//       if(true)
//       {
//            var username = "hemma";
//       }
//       console.log(username)
// }; // print
// temp();

// const temp = ()=> {
//       if(true)
//       {
//            let username = "hemma";
//       }
//       console.log(username)
// }; // no print
// temp();

// const temp = ()=> {
//       if(true)
//       {
//            const username = "hemma";
//       }
//       console.log( username )
// }; // no print
// temp();

const sum10 =(a,b)=>{
      const ans = (a+b)%10;
      
      const print = ()=> {
            console.log(ans)
      }; // print
    
      console.log("start")
      print();
      console.log("end")
};
sum10(10,22);