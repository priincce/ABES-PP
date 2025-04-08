import React, { useState } from 'react'

const App = () => {
  const [data, setData]=useState({
    name:"",
    email:"",
    passwd:"",
  });
  const [flag, setFlag] = useState(true);

  const handleClick = () =>{
    setFlag(flag);
  }
      const handleChange = (e)={
        const obj ={
          e.get("name"),
          e.get("email"),
          e.get("passwd")
            };
        setData(obj);
      }

    return
  }
  
}

export default App
