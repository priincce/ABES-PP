import React, { useState } from 'react'

const App = () => {

      const [userData, setUserData] = useState({});
      const [isSubmitted,setIsSubmitted] = useState(false);
      const handleSubmit =(e)=>{
            e.preventDefault();
            const obj={
                  name: e.target[0].value,
                  email: e.target[1].value
            };
            setUserData(obj);
            setIsSubmitted(true);
      }

  return (
      <div>A
      {isSubmitted === false ? (
        <form   onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input   placeholder='typo'/>
          </div>
          <div>
            <label>email: </label>
            <input   placeholder='typo'/>
          </div>
          <button>Submit</button>
          <button type='reset'>Reset</button>
        </form>
        )

        : (<section>
          <h2>Name : {userData.name}</h2>
          <h4>Email: {userData.email}</h4>
        </section>)
      
      }
    </div>
  )
}

export default App
