import React from 'react'

const Card = ({title,text}) => {
return(
      <div>
      <h2>{title}</h2>
      <label htmlFor="">{text}</label>
      </div>
);
}

export default Card
    