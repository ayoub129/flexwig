import React, { useState } from 'react';

function Dienstverlening({items , header}) {


  
  const defaultOpenIndex = 0;

  const [activeIndex, setActiveIndex] = useState(defaultOpenIndex);

  return (
    <div className='acc-sect'>
        <h4>{header}</h4>
        <div className='dienstverlening'>
          
        <div className='accordion'>
          {items.map((item, index) => (
            <div key={item.id}>
              <div className={activeIndex === index ? 'accordion-header-icon active' : 'accordion-header-icon'}>
              
              {activeIndex === index ? <i class="fa-solid fa-chevron-up"></i> :   <i class="fa-solid fa-chevron-down"></i> }
                <div className='accordion-header' onClick={() => setActiveIndex(index)}>{item.header}</div>
              </div>
              {activeIndex === index && <div className='accordion-text'>{item.content}</div>}
            </div>
          ))}
        </div>
        <div className='man'>
          <img src='images/man.png' alt='man'/>
        </div>
      </div>
    </div>
  );
}

export default Dienstverlening
