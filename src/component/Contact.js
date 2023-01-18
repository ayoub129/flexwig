import React from 'react'
import { Link } from 'react-router-dom'

const Contact = ({header , number}) => {
  number = "images/" + number + ".png"
  return (
    <div className='contact'>
      <div className='info'>
        <div>
          <p className='color-primary '>Onze leraren vertellen:</p>
          <h4 className='quote'>{header}</h4>
          <Link to={"/lerarenonderzoek"} className='learn-more-container' >
            <div className='d-flex justify-start'>
                <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
                <p className='learn-more'>Bekijk alle resultaten van het Flexwijs Leraren Onderzoek</p>
            </div>
          </Link>
        </div>
        <img src={number} alt={number}/>
      </div>
    </div>
  )
}

export default Contact