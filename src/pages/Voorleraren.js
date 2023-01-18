import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Samen from '../component/Samen'
import Video from '../component/Video'
import KnowMore from '../component/knowMore'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Transparant from '../component/Transparant'
import Dienstverlening from '../component/Dienstverlening'


const Voorscholen = () => {
  const items = [
    {
      id: 1,
      header: 'Startende leraar: Maak een vliegende start',
      content: 'Flexwijs is de ideale werkgever voor starters binnen het onderwijs. Niet alleen zorgen wij er samen voor dat je snel aan de slag kunt in een functie die goed bij je past, maar je krijgt als je dat wilt ook de kans om gedurende de eerste periode van je loopbaan op een aantal verschillende scholen te werken. Zo doe je veel ervaring op met allerlei uiteenlopende onderwijsdoelgroepen en maak je kennis met meerdere verschillende werkomgevingen. Deze ervaring is heel waardevol voor de rest van je loopbaan en zorgt ervoor dat je snel kunt doorgroeien.'
    },
    {
      id: 2,
      header: 'Ervaren leraar: Vind jouw ideale onderwijsbaan',
      content: 'Leraren zijn trouwe mensen die vaak vele jaren bij dezelfde school werken. Dit is een goede eigenschap, want zo is ieder schooljaar de continuïteit en kwaliteit van het onderwijs gewaarborgd. Tegelijkertijd zien we de laatste jaren dat steeds meer leraren bewust kiezen voor een nieuwe werkomgeving. Ook dit is positief voor het onderwijs, want zo vindt er een kruisbestuiving plaats waar zowel leraren als scholen baat bij hebben en wordt ruimte gecreëerd voor jonge startende leraren. Ben jij daarom ambitieus, nieuwsgierig of simpelweg gewoon toe aan een nieuwe en verfrissende en onderwijsuitdaging? Wij helpen je graag bij het verwezenlijken van deze wens!'
    },
    {
      id: 3,
      header: 'Deeltijd leraar: Wil je meer uren werken?',
      content: 'Misschien werk je al op een hele leuke school, maar wil je naast je huidige betrekking graag nog een aantal extra uren werken. Soms is hier geen ruimte voor binnen je eigen onderwijsinstelling. Kom dan gerust eens bij ons langs. Veel scholen worstelen namelijk met de invulling van kleine (tijdelijke) dienstverbanden. Wij stellen je graag voor bij deze scholen, zodat zij een ervaren werknemer hebben en jij je werkzaamheden kunt uitbreiden met behoud van jouw huidige hoofdfunctie.'
    },
    {
      id: 4,
      header: 'Oriënterende leraar: Een nieuwe uitdaging',
      content: 'Het initiatief om uit elkaar te gaan kan ook wel eens bij een school vandaan komen. Dit kan komen door krimp van leerlingaantallen, een verminderde keuze voor jouw vak of omdat de chemie tussen jullie er gewoon niet meer is. Dat is dan even slikken, want je hebt er alles aangedaan en toch houdt het ineens op. Misschien twijfel je hierdoor aan jezelf of ben je teleurgesteld geraakt in het onderwijs in het algemeen. Besef dan goed dat elke school anders is en dat jij met jouw ervaring ontzettend veel te bieden hebt als leraar. Samen vinden we de onderwijsbaan waar jij weer met plezier en succes voor de klas staat!'
    },
    {
      id: 5,
      header: 'Zij-instromer: Onderwijs zit in je bloed',
      content: 'Zij-instromers komen regelrecht uit het veld. Dit wordt door scholen enorm gewaardeerd, want je beschikt hierdoor over een schat aan praktijkervaring en dat is van directe meerwaarde voor de kwaliteit van het onderwijs. En leerlingen vinden deze praktijkvoorbeelden ook nog eens ontzettend leuk en nuttig. Volg je een lerarenopleiding of heb je deze in het verleden al eens afgerond? Neem dan contact met ons op. Flexwijs gaat ervoor om jouw onderwijsloopbaan zo snel mogelijk te lanceren, zodat je waardevolle werkervaring kunt opdoen in een baan die goed past bij jouw kennis en competenties.'
    }
  ];

  return (
    <div>
        <Header></Header>
        <Hero bg="hero vorleraren" video={false} buttons={false} header_second="VOOR LERAREN" header="Onderwijs is mensenwerk" text="Flexwijs zet jouw ambities centraal. Samen vinden we de nieuwe onderwijsbaan die écht bij jou past. Krijgen waar je recht op hebt hoort daar ook bij."></Hero>
        <div className='samen-vid'>
          <Samen header="Morgen begint vandaag" link={false} text1="Als leraar wil je jonge mensen inspireren voor een vak of helpen bij het vinden van hun weg in het leven. Wanneer iemand een beroep op je doet sta je gelijk voor hun klaar, want elke dag telt in het schooljaar."
           text2="Op dezelfde manier staan wij klaar voor jou en voor onze scholen. Daarom kenmerkt onze werkwijze zich door persoonlijk contact en zetten wij altijd jouw wensen en ambities centraal. Onderwijs is immers mensenwerk."></Samen>
          <Video src="292184122"></Video>
        </div>
        <KnowMore two={false} header1="Waarom leraren kiezen voor Flexwijs" list1="Eerlijk salaris (conform geldende onderwijs cao)" list2="Goede reiskostenvergoeding" list3="Vakantiegeld en eindejaarsuitkering (conform geldende onderwijs cao)" list4="Doorbetaling van schoolvakanties en feestdagen tijdens je dienstverband"
        list5="Moderne pensioenregeling" list6="Springplank naar een vaste baan" list7="Persoonlijk contact en goede begeleiding" list8="Ondersteuning van een enthousiast en kundig team" list9="Specialist binnen speciaal en regulier onderwijs"
        header2="Open, eerlijk en betrokken" text1 ="Flexwijs zet zich graag in voor mensen die niets liever willen dan werken in het (speciaal) onderwijs. Wij kennen onze scholen écht en weten wat er leeft. Dit nemen we mee in ons gesprek met jou zodat we samen kunnen onderzoeken of een positie goed bij je past." text2="Daarnaast staat Flexwijs voor heldere afspraken en krijgen waar je recht op hebt. Een eerlijk salaris, een goede reiskostenvergoeding, uitbetaling van je vakantiegeld: alles is goed en transparant geregeld. Dus geen onduidelijke pensioenregeling of verrassingen achteraf."
        text3 ="Ook zijn we actief betrokken bij jouw voortgang en staan wij altijd klaar om te helpen bij vragen of verzoeken tot ondersteuning. Op deze manier werken we allemaal samen aan het duurzaam versterken van het onderwijs." text4="Meer weten? Neem dan contact met ons op en sla je vleugels uit!">
        </KnowMore>
        <Contact header="“Flexwijs heeft goede en eerlijke arbeidsvoorwaarden.”" number='84'></Contact>
        <Transparant header="Samen voor het onderwijs" text1="Onderwijs doe je samen. Daarom houden we goed contact met elkaar en kun je altijd bij ons terecht met al je vragen. Ook kunnen wij desgewenst actieve ondersteuning bieden door middel van de inzet van onze onderwijs- en zorgcoaches. Zo zorgen we er samen voor dat jij met plezier en succes voor de klas staat." text2="Daarnaast willen wij jou en onze scholen echt verder helpen. Dus wanneer het jouw ambitie is om een vaste baan te vinden helpen wij graag hierbij. Flexwijs wil een springplank zijn voor jouw onderwijsloopbaan en we zijn er trots op dat veel van onze leraren vanuit een tijdelijke positie doorgroeien naar een vaste betrekking."></Transparant>
        <Dienstverlening header="Wie ben jij?" items={items}></Dienstverlening>

        <div className='samen-vid'>
          <Video src="292387887"></Video>
          <Samen header="Over Flexwijs" link={false} text1='Flexwijs zet zich in voor het duurzaam versterken van het onderwijs. Iedere dag opnieuw en altijd met een blik op de toekomst. Lees meer over onze organisatie en hoe wij al sinds 2010 de juiste leraar en de juiste school bij elkaar brengen binnen het speciaal onderwijs en regulier onderwijs en hoe onze leraren over ons denken.'
           text2="Benieuwd wat wij voor jou kunnen betekenen? Voel je dan vrij om te bellen naar 076-5428436 of stuur ons een berichtje. We kijken er naar uit om je te spreken!"></Samen>
        </div>
        <Footer header="“Flexwijs is geïnteresseerd in hoe het met je gaat op school.”" text="Robin, sportdocent op het VMBO"></Footer>
    </div>
  )
}

export default Voorscholen
