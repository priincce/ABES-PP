import React from 'react'
import './Card.css' 
const Card = (props) => {
  return (
    <div className='card1'>
      <img src={props.val.thumbnail} alt="" />
      <hr />
      <h2>{props.val.title}</h2>
      <h3>{props.val.price}$</h3>
    </div>
  )
}

export default Card
