import React from 'react'
import './Title.css'

const Title = ({title, subtitle}) => {
  return (
    <section className='title-section'>
      <div className="title">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default Title