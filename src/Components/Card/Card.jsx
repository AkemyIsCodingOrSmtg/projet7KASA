import React from 'react'
import './Card.scss'

export default function Card({ cover, title }) {
  
  return (
    <div className='location__card'>
      <img src={cover} alt="location" />
      <h2>{title}</h2>
    </div>
  )
}