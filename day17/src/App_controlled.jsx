import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  }


  return (
    <div>
      {isSubmitted === false ?
        <section>
          <div>
            <label>Name: </label>
            <input value={name} onChange={(e) => { setName(e.target.value) }} placeholder='typo' />
          </div>
          <div>
            <label>email: </label>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='typo' />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </section>

        : <section>
          <h2>Name : {name}</h2>
          <h4>Email: {email}</h4>
        </section>
      }
    </div>
  )
}

export default App;
