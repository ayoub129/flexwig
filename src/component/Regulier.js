import React  from 'react'
import { Link } from 'react-router-dom'

const Regulier = () => {

  return (
    <div className='Regulier-sect'>
        <div className='regu'>
          <h4>Regulier onderwijs</h4>
          <p className='para'>Als schoolleider of leraar binnen het regulier onderwijs zet jij je elke dag in voor inspirerend en leerlinggericht onderwijs. Tegelijkertijd is geen school of leraar hetzelfde. Dat vraagt om maatwerk. Zeker wanneer er sprake is van een uitdagend of verstoord leerklimaat. Herkenbaar? Dan bel je Flexwijs.</p>
          <Link to={"/Regulieronderwijs"} className='learn-more-container' >
            <div className='d-flex justify-start'>
                <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
                <p className='learn-more'>Lees meer</p>
            </div>
          </Link>
        </div>
        <img className='regulier-img' src='images/regulier.jpg' alt='Regulier'/>
    </div>
  )
}

export default Regulier
