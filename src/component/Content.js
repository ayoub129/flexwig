import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({content}) => {
   


  return (
    <div className='content'>
         {content.map((con , index) => (
                <div key={index} className='content-box'>
                    <Link to={`/Werkenbijid/${con.id}`}>
                        <h4>{con.header}</h4>
                        <p className='para'>{con.text}</p>
                        <div className='city'>{con.city}</div>
                    </Link>
                </div>
        ))}
       
    </div>
  )
}

export default Content
