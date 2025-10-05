import React from 'react'

const Card = (props) => {
  return (
  <>
  
  <p> {props.name}</p>
  <p> {props.description} </p>
  <span> {props.price} </span>
  </>
  )
}

export default Card
