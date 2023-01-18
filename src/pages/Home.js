import React  from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import KnowMore from '../component/knowMore'
import Speciaal from '../component/Speciaal'
import Regulier from '../component/Regulier'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

const Home = () => {
 
  
  return (
    <div>
        <Header ></Header>
        <Hero  bg="hero" video={true} buttons={true} header_second="AL 10 JAAR DÉ PARTNER BIJ UITDAGENDE ONDERWIJSVRAGEN" header="Samen voor het onderwijs"></Hero>
        <div className='samen-vid'>
         <Samen header="Samen voor het onderwijs" link={true} text1="Flexwijs brengt de juiste leraar en de juiste school bij elkaar. Wij zijn al 10 jaar dé partner bij uitdagende onderwijsvragen en zetten ons in voor het duurzaam versterken van het onderwijs. Iedere dag opnieuw en altijd met een blik op de toekomst."></Samen>
          <Video src={"292184122"}></Video>
        </div>
        <KnowMore two={true} header1="Voor scholen" 
        header2="Voor leraren" nolist ="Op zoek naar de juiste leraar voor de juiste klas? Flexwijs helpt. Persoonlijk betrokken en met oog voor detail. Binnen speciaal en regulier onderwijs."
        text1="Flexwijs zet jouw ambities centraal. Samen vinden we de nieuwe onderwijsbaan die écht bij jou past. Krijgen waar je recht op hebt hoort daar ook bij.">
        </KnowMore>
        <Speciaal></Speciaal>
        <Regulier></Regulier>
        <Contact header={"“Mijn kennismaking met Flexwijs was prettig, professioneel en persoonlijk.”"} number="87"></Contact>
        <Footer header={"“Flexwijs is betrokken en kent het onderwijs.”"} text="Paula, leraar AVO bij een Justitiële Jeugdinrichting"></Footer>
    </div>
  )
}

export default Home
