import React  from 'react'
import { Link } from 'react-router-dom'

const Contactm = ({text}) => {

  return (
    <div className='Regulier-sect' style={{marginTop: '8rem'}}>
        <div className='regu'>
          <h4>Contact opnemen met Flexwijs</h4>
          <p className='para'>{text}</p>
          <Link to={"/contact"} className='learn-more-container' >
            <div className='d-flex justify-start'>
                <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
                <p className='learn-more'>Contact opnemen met Flexwijs</p>
            </div>
          </Link>
        </div>
        <img className='regulier-img' src='images/bold.png' alt='contact'/>
    </div>
  )
}

export default Contactm
