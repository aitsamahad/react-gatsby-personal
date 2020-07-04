import React from 'react'
import './card.css'

const card = ({ title, text, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default card
