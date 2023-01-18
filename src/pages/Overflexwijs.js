import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import Footer from '../component/Footer'
import Transparant from '../component/Transparant'
import Contact from '../component/Contact'


const Overflexwijs = () => {

  return (
    <div>
        <Header></Header>
        <Hero bg="hero woman" video={false} buttons={false} header_second="OVER FLEXWIJS" header="Morgen begint vandaag" text="Flexwijs zet zich in voor het duurzaam versterken van het onderwijs. Iedere dag opnieuw en altijd met een blik op de toekomst."></Hero>
        <div className='samen-vid'>
          <Samen header="Samen voor het onderwijs" link={false} text1="Flexwijs is al 10 jaar dé partner bij uitdagende onderwijsvragen binnen speciaal en regulier onderwijs. Hierbij is het onze missie om er voor te zorgen dat scholen altijd de beschikking hebben over enthousiaste en gemotiveerde onderwijsprofessionals zodat leerlingen te allen tijde toegang hebben tot goed en inspirerend onderwijs. Ook wanneer er sprake is van een uitdagend of verstoord leerklimaat."
           text2="Wij helpen scholen bij het oplossen van vervangingsvragen en het vinden van nieuwe collega’s voor het vaste team. Hierbij staan wij voor persoonlijk contact, heldere afspraken, goede begeleiding, vaste tarieven en eerlijke arbeidsvoorwaarden. Zo werken we allemaal samen aan het duurzaam versterken van het onderwijs!"></Samen>
          <Video image="over.png"></Video>
        </div>
        <Contact header="“Flexwijs heeft verstand van onderwijs en weet wat er leeft onder scholen en docenten.”" number='86'></Contact>
        <Transparant header="Betrouwbaar en integer" text1="Flexwijs beschikt al voor het tiende jaar op rij over het keurmerk NEN 4400-1 van de Stichting Normering Arbeid (SNA). Daar zijn wij best trots op, want dit houdt in dat wij doorlopend voldoen aan de hoogst mogelijke standaarden op het gebied van professioneel financieel en administratief management." text2="Ter controle laten wij onszelf jaarlijks beoordelen door een onafhankelijke certificeringsorganisatie. Zo borgen wij dat wij te allen tijde werkzaam zijn conform de geldende wet- en regelgeving en kunnen scholen en leraren er altijd van op aan dat wij een betrouwbare partner en een goede werkgever zijn."></Transparant>
        <div className='samen-vid'>
          <Video src="292184122"></Video>
          <Samen header="Over Flexwijs" link={false} text1='Flexwijs zet zich in voor het duurzaam versterken van het onderwijs. Iedere dag opnieuw en altijd met een blik op de toekomst. Lees meer over onze organisatie en hoe wij al sinds 2010 de juiste leraar en de juiste school bij elkaar brengen binnen het speciaal onderwijs en regulier onderwijs en hoe onze leraren over ons denken.'
         ></Samen>
        </div>
        <Footer header="“Flexibiliteit, een erg fijne sfeer en een prettige samenwerking.”" text="Maurice, leraar AVO op het VSO"></Footer>
    </div>
  )
}

export default  Overflexwijs
