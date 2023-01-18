import React, { useState } from 'react'
 
const Filter = ({ handleFilterCriteriaChange , handleFilterCat , handleFilterCity}) => {
    const cate = [
        {
          id: 1,
          name: 'Engels',
          number: 2,
          city: 'Utrecht'
        },
        {
          id: 2,
          name: 'Natuurkunde',
          number: 1,
          city: 'Utrecht'
        },
        {
          id: 3,
          name: 'Nederlands',
          number: 1,
          city: 'Utrecht'
        },
        {
          id: 4,
          name: 'Algemeen Vormend Onderwijs (AVO)',
          number: 1,
          city: 'Oost-Brabant'
        },
        {
          id: 5,
          name: 'Techniek',
          number: 1,
          city: 'Limburg'
        }
      ];

      const citis = [
        {
          id: 1,
          name: 'Oost-Brabant',
          number: 1,
          cat:[4]
        },
        {
          id: 2,
          name: 'Limburg',
          number: 1,
          cat:[5]
        },
        {
          id: 3,
          name: 'Utrecht',
          number: 4,
          cat:[1,2,3]
        }
      ];

      const [categories , setCategories] = useState(cate)
      const [cities , setCities] = useState(citis)

      const [selectedOption , setSelectedOption] = useState('')
      const [selectedOptionCat , setSelectedOptionCat] = useState('')

      const handleSearch = event => {
        handleFilterCriteriaChange(event.target.value);
      };

      const handleChange = e => {
        handleFilterCity(e.target.value)
        setSelectedOption(e.target.value);

        let filteredArray = cities.filter(city => city.name === e.target.value);

        const filteredArra = cate.filter(originalObject => {
            return filteredArray[0].cat.some(filterObject => {
              return originalObject.id === filterObject;
            });
          });
        setCategories(filteredArra);
      }

      const handleCatChange = e => {
        handleFilterCat(e.target.value);
        setSelectedOptionCat(e.target.value);

        let filteredArray = cate.filter(cat => cat.name === e.target.value);

        const filteredArra = citis.filter(originalObject => {
            return filteredArray.some(filterObject => {
              return originalObject.name === filterObject.city;
            });
          });
        setCities(filteredArra);
      }

  return (
    <div className='filter'>
        <div className='search'>
            <input className='search' onChange={handleSearch} placeholder='Zoeken...'/>
        </div>
        <div className='Filter-box'>
            <div className='filter-box-header'>
                Filter op categorie
            </div>
            <div className='filter-box-body'>
                {categories.map((cat , index) => (
                    <div key={index} className='checkbox-container'>
                        <label className="filter-container">{cat.name}
                            <input onChange={handleCatChange} checked={selectedOptionCat === cat.name} type="checkbox" value={cat.name} />
                            <span className="checkmark"></span>
                        </label>
                        <p>({cat.number})</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='Filter-box'>
          <div className='filter-box-header'>
              Filter op locatie
            </div>
            <div className='filter-box-body'>
                {cities.map((city , index) => (
                    <div key={index} className='checkbox-container'>
                        <label className="filter-container">{city.name}
                            <input onChange={handleChange} type="checkbox" checked={selectedOption === city.name} value={city.name} />
                            <span className="checkmark"></span>
                        </label>
                        <p>({city.number})</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Filter
