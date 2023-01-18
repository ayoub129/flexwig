import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Transparant from '../component/Transparant'
import Contactm from '../component/Contactm'


const Voorscholen = () => {

  return (
    <div>
        <Header></Header>
        <Hero bg="hero vorleraren" video={false} buttons={false} header_second="SPECIAAL ONDERWIJS" header="Iedereen heeft talent" text="Flexwijs is specialist voor het speciaal onderwijs. Iedere leerling verdient namelijk het beste onderwijs. Zo ontstaan er kansen en komen talenten tot bloei."></Hero>
        <div className='samen-vid'>
          <Samen header="Morgen begint vandaag" link={false} text1="Wij weten hoe bijzonder, uitdagend en dankbaar het is om te werken aan de binnen het speciaal onderwijs. Het vraagt om maatwerk, toewijding, geduld, doorzettingsvermogen en bovenal een groot hart voor kinderen en jongeren met een beperking of gedragsproblemen."
           text2="Dit zijn de randvoorwaarden om jongens en meisjes de handvatten en het vertrouwen te geven om stappen te maken naar hun toekomst. Maar dan ben je er nog niet, want alleen bij de perfecte combinatie van didactische vaardigheden en affiniteit met de doelgroep in kwestie behaal je het beste onderwijsresultaat."></Samen>
          <Video src="292184122" image="regulier.jpg"></Video>
        </div>
        <Contact header="“Flexwijs staat altijd klaar om te helpen en biedt goede begeleiding.”" number='86'></Contact>
        <Transparant header="Van talent naar professional" text1="Al sinds 2010 zet Flexwijs zich in voor een grote diversiteit aan specialistische doelgroepen. Van SBO tot jeugdzorgplus en van VSO tot justitiële jeugdinrichting helpen wij bij het oplossen van hiaten in het onderwijsteam en inspireren wij mensen met een talent voor uitdagende en kwetsbare doelgroepen." text2="Dit doen wij in nauwe samenwerking met onze zusterorganisatie Careflex Zorg Groep, specialist op het gebied van complexe zorgverlening. Samen is het onze ambitie om mensen te laten groeien tot professional in het speciaal onderwijs, waarin wij de springplank mogen zijn naar een vaste baan."></Transparant>
        <Contactm text={"Met een blik op de toekomst werken we allemaal samen aan het duurzaam versterken van het onderwijs. Op zoek naar een nieuwe collega of onderwijsbaan? Neem dan contact met ons op!"}></Contactm>
        <Footer header="“Een fijne samenwerking: betrokken, open en eerlijk.”" text="Jeroen, leraar Techniek in het Speciaal Onderwijs"></Footer>
    </div>
  )
}

export default Voorscholen