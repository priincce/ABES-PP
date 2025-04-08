import React, { useState } from 'react'
import Papa from 'papaparse';
import Card from './components/Card';

const App = () => {

  const [profile, setProfile]=useState([]);


  const handleFileUpload=(e)=>{
    // console.log(e)
    const file=e.target.files[0]
    Papa.parse(file, {
      header:true,
      complete:handleData,
    })
  }

  const handleData = (res) => {
    const {data, errors} = res;

    if(errors.length >0){
      alert("error")
    }else{
      setProfile(data);
    }
    
  }
  return (
    <div>
        <div>
          <input type="file" accept=".csv" onChange={handleFileUpload} />
        </div>
        <div>
          {
            profile.map((ele)=>
              <Card name = {ele.name} email={ele.email} githubLink ={ele.githubLink} />
            )
          }
        </div>
    </div>
  )
}

export default App
