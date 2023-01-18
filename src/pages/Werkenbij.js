import React, { useState } from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Filter from '../component/Filter'
import Content from '../component/Content'


const Werkenbij = () => {

  
  
  const originalContent = [
    {
      id: 1,
      city: 'Utrecht',
      text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een tijdelijke EN reguliere Docent Engels (ca. 0,80 fte). De school…",
      header: "Docent Engels Tijdelijk EN Regulier",
      cat: 'Engels'
    },
    {
      id: 2,
      city: 'Oost-Brabant',
      text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Leraar AVO (ca. 1,0 fte). De school is gevestigd…",
      header: "Leraar AVO",
      cat: 'Algemeen Vormend Onderwijs (AVO)'
      },
      {
      id: 3,
      city: 'Utrecht',
      text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Engels (ca. 1,0 fte). De school is gevestigd…",
      header: "Docent Engels",
      cat: 'Engels'
      },
      {
      id: 4,
      city: 'Utrecht',
      text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Natuurkunde (ca. 0,60 fte). De school is gevestigd…",
      header: "Docent Natuurkunde",
      cat: 'Natuurkunde'
      },
      {
      id: 5,
      city: 'Utrecht',
      text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Nederlands (ca. 1,0 fte). De school is gevestigd…",
      header: "Docent Nederlands",
      cat: 'Nederlands'
      },
      {
      id: 6,
      city: 'Limburg',
      text: "Wij zijn Flexwijs, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Praktijkbegeleider Metaaltechniek (ca. 0,40 fte). De school is gevestigd…",
      header: "Praktijkbegeleider Metaaltechniek",
      cat: 'Techniek'
      },

    ];

  const [filterCriteria, setFilterCriteria] = useState("");
  
  const [content, setContent] = useState(originalContent);

    const handleFilterCriteriaChange = criteria => {
      setFilterCriteria(criteria);
      setContent(originalContent.filter(item => item.header.toLowerCase().includes(criteria.toLowerCase())));
    };

    const handleFilterCity = City => {
      setContent(originalContent.filter(item => item.city.toLowerCase().includes(City.toLowerCase())));
    }

    const handleFilterCat = cat => {
      setContent(originalContent.filter(item => item.cat.toLowerCase().includes(cat.toLowerCase())));
    }
  return (
    <div>
        <Header></Header>
        <Hero bg="hero pregnant" video={false} buttons={false} header_second="ONZE ONDERWIJSBANEN" header="Samen voor het onderwijs" text="Hieronder zie je een overzicht van onze onderwijsbanen. Solliciteer direct op de vacature waar je enthousiast over bent of stuur een open sollicitatie!"></Hero>
        <div className='gridfilter'>
          <div className='search-filter'>
            <Filter handleFilterCat={handleFilterCat}  handleFilterCriteriaChange={handleFilterCriteriaChange} handleFilterCity={handleFilterCity} ></Filter>
          </div>
          <div className='content-container'>
            <Content content={content}></Content>
          </div>
        </div>
        <Footer no={true}></Footer>
        <div style={{display: "none"}}>{filterCriteria}</div>
    </div>
  )
}

export default Werkenbij
