import React  from 'react'
import { Link } from 'react-router-dom'

const Speciaal = () => {

  return (
    <div className='speciaal-sect'>
        <div className='spec'>
          <h4>Speciaal onderwijs</h4>
          <p className='para'>Iedere leerling verdient het beste onderwijs. Wij weten hoe bijzonder, uitdagend en dankbaar het is om te werken aan de toekomst van kinderen en jongeren met een beperking of gedragsproblemen. Heb jij een groot hart voor deze doelgroep? Dan ben je bij Flexwijs aan het juiste adres.</p>
          <Link to={"/Speciaalonderwijs"} className='learn-more-container' >
            <div className='d-flex justify-start'>
                <i className="fa-solid fa-circle-plus fa-2x color-primary"></i>              
                <p className='learn-more'>Lees meer</p>
            </div>
          </Link>
        </div>
        <img className='speciaal-img' src='images/speciaal.png' alt='speciaal'/>
    </div>
  )
}

export default Speciaal
