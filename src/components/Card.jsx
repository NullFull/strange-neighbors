import React from 'react'

const Card = ({ imageUrl, name }) => {
  return (
    <div>
        <img src={imageUrl} alt={name} />
    </div>
  )
}

export default Card