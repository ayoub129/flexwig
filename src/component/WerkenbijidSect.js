import React from 'react'

const WerkenbijidSect = ({content}) => {
  return (
    <div className='WerkenbijidSect'>
        <h2>{content.header}</h2>
        <p className='city'>{content.city}</p>
        <p className='para'>{content.text}</p>
        <h4 className='subheader'>{content.subheader1 && content.subheader1}</h4>
       <ul>
         {content.list1 && content.list1.map((li) => (
            <li>{li}</li>
          ))}
        </ul> 
        <h4 className='subheader'>{content.subheader2}</h4>
       <ul>
         {content.list2.map((li) => (
            <li>{li}</li>
          ))}
        </ul> 
        <h4 className='subheader'>{content.subheader3}</h4>
        <p className='para'>{content.text1}</p>
    </div>
  )
}

export default WerkenbijidSect