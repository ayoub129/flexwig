import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import Footer from '../component/Footer'


const Werkenbijflexwijs = () => {

  return (
    <div>
        <Header></Header>
        <Hero bg="hero pregnant" video={false} buttons={false} header_second="WERKEN BIJ FLEXWIJS" header="Kom ons team versterken!" text="Ben jij maatschappelijk betrokken en wil jij het verschil maken voor het onderwijs? Ter versterking van ons groeiende team zoeken wij regelmatig nieuwe collega’s!"></Hero>
        <div className='samen-vid'>
          <Samen header="Over Flexwijs" link={false} text1="Flexwijs is specialist op het gebied van personeelsdiensten voor het onderwijs. Wij helpen scholen binnen het speciaal en regulier onderwijs bij het oplossen van vervangingsvragen en het vinden van nieuwe collega’s voor het vaste team. Ook organiseren wij job events ter promotie van het (speciaal) onderwijs."
           text2="Flexwijs is een jonge en dynamische organisatie die staat voor kwaliteit en persoonlijk contact. Ons team is gezellig, laagdrempelig, sociaal en maatschappelijk betrokken. Daarnaast willen we met elkaar hard werken om zo topprestaties te leveren voor onze scholen en onderwijsprofessionals."></Samen>
          <Video src={292184122}></Video>
        </div>
        <div style={{textAlign: 'center', fontWeight:"bold" , fontSize:"1.1rem" , color:"#002c41"}}>VACATURES</div>
        <div className='samen-vid'>
          <Video src={292387887}></Video>
          <Samen link={false} text1="Elke dag streven wij er naar om onze scholen zo goed mogelijk van dienst te zijn en onze medewerkers de aandacht te geven die zij verdienen, zodat zij te allen tijde in staat zijn om goed onderwijs te verzorgen aan leerlingen en studenten van ieder niveau en elke achtergrond."
           text2="Meer weten? Op onze website kun je alles vinden over onze organisatie en hoe wij al sinds 2010 de juiste leraar en de juiste school bij elkaar brengen. Ook kun je lezen hoe onze leraren over ons denken. Check ook de leuke video’s over onze werkwijze, onze missie en de job events die wij hebben georganiseerd."></Samen>
        </div>
        <div className='samen-vid'>
          <Samen header={'Word jij onze nieuwe collega?'} link={false} text1="Ben jij oplossingsgericht, initiatiefrijk en maatschappelijk betrokken? Heb je sterke communicatieve vaardigheden, een scherp geheugen en oog voor detail? Typeert jouw omgeving jou als een energieke en positief ingestelde doorzetter die mensen altijd blij en enthousiast maakt?"
           text2="Solliciteer dan nu, we kijken er naar uit om jou te leren kennen!"></Samen>
          <Video src={335868769}></Video>
        </div>
        <Footer header="“Flexibiliteit, een erg fijne sfeer en een prettige samenwerking.”" text="Maurice, leraar AVO op het VSO"></Footer>
    </div>
  )
}

export default   Werkenbijflexwijs
