import React, { useEffect, useState } from 'react'

const Card = ({name, email, githubLink}) => {

      const [data, setData] = useState({});
      const res = githubLink.split("/")
      const userId = res[3];
      const getData= async()=>{
            const resp =await fetch(`https://www.github.com/users/${userId}`)
            const temp =await resp.json();
            setData(temp)
      }

      useEffect(()=>{
            getData();
      },[])
  return (
    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>
       <a href={githubLink} target='_blank'>{githubLink}</a>
    </div>
  )
}

export default Card
