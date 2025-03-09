import React from 'react'

const Card = ({username}) => {
  return (
      <div className="card">
            <h1>hello! {username}</h1>
            <p>para here</p>
      </div>
  )
}

export default Card;

export const TITLE = "fun is here";
