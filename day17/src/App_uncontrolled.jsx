import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
      console.log(e)
      e.preventDefault();
      setName(e.target.userName.value);
      setEmail(e.target.userEmail.value);
      setIsSubmitted(true);
  }


  return (
    <div>
      {isSubmitted === false ? (
        <form   onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input name='userName' placeholder='typo'/>
          </div>
          <div>
            <label>email: </label>
            <input name='userEmail' placeholder='typo'/>
          </div>
          <button>Submit</button>
          <button type='reset'>Reset</button>
        </form>
        )

        : (<section>
          <h2>Name : {name}</h2>
          <h4>Email: {email}</h4>
        </section>)
      
      }
    </div>
  )
}

export default App;
