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
      header: 'Samen Werven – Voor wie op zoek is naar de beste kandidaat',
      content: 'Niet tevreden over de respons op jouw onderwijsvacature? Kies dan voor Samen Werven van Flexwijs. Wij versterken jouw eigen wervingsproces door actief potentiële kandidaten te benaderen. Wij kennen de wensen en ambities van duizenden kandidaten. Van leraar tot orthopedagoog. Van afdelingsleider tot conciërge. Wij zijn er voor iedere functie op school. Dit bespaart niet alleen veel tijd, maar vergroot ook de kans op een duurzame samenwerking met jouw nieuwe collega. En dat tegen een superscherpe wervingsvergoeding.'
    },
    {
      id: 2,
      header: 'Zeker Werven – Werven met proeftijdgarantie',
      content: 'Bij Zeker Werven krijg je de topkwaliteit dienstverlening waar Flexwijs om bekend staat. Wij gaan dus actief op zoek naar de beste kandidaten voor jouw onderwijsvacature. Kandidaten die ook nog eens goed aansluiten bij het unieke karakter van jullie school. Daarnaast krijg je er nog iets bij: de proeftijdgarantie. Mocht jij of jouw nieuwe medewerker dan onverhoopt besluiten om de arbeidsovereenkomst binnen een maand op te zeggen krijg je een deel van de wervingsvergoeding retour. Zo werken we allemaal samen aan het duurzaam versterken van het onderwijs.'
    },
    {
      id: 3,
      header: 'Talent Traject – Maximale zekerheid tegen minimale kosten',
      content: 'Vind je het een te groot risico om iemand gelijk in dienst te nemen en wil je ook niet vastzitten aan langdurige detacheringsovereenkomsten? Dan is het Talent Traject de juiste keuze. Wij hebben deze innovatieve variant speciaal ontwikkeld voor het onderwijs om de brug te vormen tussen werven en detacheren. Jij en jouw nieuwe collega krijgen namelijk 3 maanden proeftijdgarantie om te ervaren of de samenwerking naar tevredenheid verloopt. Allebei enthousiast? Dan kan op ieder moment de optie worden gelicht om de medewerker versneld in eigen dienst te nemen.'
    },
    {
      id: 4,
      header: 'Deta Basis – De voordeligste oplossing voor tijdelijke projecten',
      content: 'Flexwijs bewijst dat detacheren binnen het onderwijs helemaal niet per definitie duur hoef te zijn. Deta Basis staat voor detacheren tegen het voordeligste tarief van Nederland. Zonder poespas en zonder kleine lettertjes. Want Flexwijs staat voor volledige transparantie. Zo weet je precies waar je aan toe bent en zijn er dus geen verrassingen achteraf. Wel zo fijn. En mocht je de nieuwe collega zelf in dienst willen nemen kan dit ook nog eens tegen bijzonder aantrekkelijke voorwaarden. Hierdoor behoren torenhoge overnamekosten eindelijk tot het verleden.'
    },
    {
      id: 5,
      header: 'Partner Plan – De beste keuze voor uitdagende onderwijsvragen',
      content: 'Kies je voor het Partner Plan dan ga je voor maximale zekerheid en uitstekende voorwaarden. Zoals bijvoorbeeld extra flexibiliteit door een verkorte opzegtermijn en volledige dekking van het ziekterisico. Daarnaast is Flexwijs actief betrokken bij de uitvoering van het project door middel van gezamenlijke periodieke evaluaties en doorlopende begeleiding van de medewerker. En wanneer de samenwerking goed bevalt heb je ook nog eens de mogelijkheid om de nieuwe collega versneld over te nemen. Zo werken we allemaal samen aan het duurzaam versterken van het onderwijs.'
    }
  ];

  return (
    <div>
        <Header></Header>
        <Hero bg="hero voorscholen" video={false} buttons={false} header_second="VOOR SCHOLEN" header="Onderwijs is mensenwerk" text="Op zoek naar de juiste leraar voor de juiste klas? Flexwijs helpt. Persoonlijk betrokken en met oog voor detail. Binnen speciaal en regulier onderwijs."></Hero>
        <div className='samen-vid'>
          <Samen header="Persoonlijk en betrokken" link={false} text1="Flexwijs brengt al sinds 2010 de juiste leraar en de juiste school bij elkaar. Dit kan bijvoorbeeld zijn wanneer er iemand uitvalt door ziekte of zwangerschap, maar ook wanneer er goede mensen worden gezocht voor het vaste team."
           text2="Onze werkwijze kenmerkt zich door persoonlijk contact. Dit begint met het besef dat iedere school uniek is. Dat schatten wij als geen ander op waarde bij het oplossen van uw onderwijsvraag. Onderwijs is immers mensenwerk."></Samen>
          <Video src="292184122"></Video>
        </div>
        <KnowMore two={false} header1="Waarom scholen kiezen voor Flexwijs" list1="Al 10 jaar dé partner bij uitdagende onderwijsvragen" list2="Specialist binnen speciaal en regulier onderwijs" list3="Enkel passende en enthousiaste kandidaten worden aan u voorgesteld" list4="Transparante en vaste tarieven, dus geen verrassingen achteraf"
        list5="Altijd dezelfde contactpersoon" list6="Regelmatig persoonlijk contact, zo bereiken we samen het beste resultaat" list7="Eerlijke arbeidsvoorwaarden voor onze leraren" list8="Beschikking tot onderwijsondersteuning en zorgbegeleiding op maat"
        header2="Samen voor het onderwijs" text1 ="Een goede leraar geeft goed en inspirerend onderwijs, heeft oog voor de doelgroep en is een waardevolle collega voor het team. Daarom letten wij niet alleen op de juiste bevoegdheid, maar houden wij ook rekening met de schoolcultuur en de reden achter de gestelde onderwijsvraag." text2="Wij koppelen dit aan de wensen en ambities van onze kandidaten. Met hun specifieke kennis en ervaring kunnen zij met een frisse blik de uitdagingen aanpakken die op dat moment spelen op school. Al dan niet tijdelijk of met een vaste baan in het vooruitzicht."
        text3 ="Flexwijs staat voor heldere afspraken. Wij werken met vaste tarieven en onze leraren ontvangen een eerlijk salaris en goede arbeidsvoorwaarden. Verder voelen wij ons medeverantwoordelijk voor het succes van de samenwerking. Daarom houden we goed contact met elkaar en staan we altijd klaar om te helpen bij onderwijs- of zorgvragen." text4="Daarnaast willen wij een springplank zijn voor onze leraren. We zijn er dan ook trots op dat veel van onze medewerkers vanuit een tijdelijke positie doorgroeien naar een vaste betrekking. Met een blik op de toekomst brengen wij dus de juiste leraar en de juiste school bij elkaar. Zo werken wij allemaal samen aan het duurzaam versterken van het onderwijs.">
        </KnowMore>
        <Contact header="Wist u dat 97% van onze leraren Flexwijs zou aanraden bij scholen die op zoek zijn naar nieuwe onderwijscollega’s?" number='97'></Contact>
        <Transparant header="Eerlijk en transparant" text1="Als eerste en enige onderwijsdetacheerder werkt Flexwijs met vaste tarieven die ook nog eens rekening houden met het maatschappelijke karakter van de onderwijsbranche. Afhankelijk van de onderwijsvraag is dus gelijk duidelijk welke kosten dit met zich meebrengt en zijn er geen verrassingen achteraf." text2="Door onze tarieven onafhankelijk te maken van individuele arbeidsvoorwaarden kunnen scholen altijd kiezen voor de kandidaat waarin zij het meeste vertrouwen in hebben. Dat komt ten goede van de kwaliteit van het onderwijs én geeft iedereen gelijke kansen, ongeacht leeftijd of ervaring."></Transparant>
        <Dienstverlening header="Onze dienstverlening" items={items}></Dienstverlening>

        <div className='samen-vid'>
          <Video src="292387887"></Video>
          <Samen header="Over Flexwijs" link={false} text1='Flexwijs zet zich in voor het duurzaam versterken van het onderwijs. Iedere dag opnieuw en altijd met een blik op de toekomst. Lees meer over onze organisatie en hoe wij al sinds 2010 de juiste leraar en de juiste school bij elkaar brengen binnen het speciaal onderwijs en regulier onderwijs en hoe onze leraren over ons denken.'
           text2="Benieuwd hoe wij scholen helpen om blijvend geld te besparen op zowel tijdelijke inhuur als reguliere werving? Maak dan een afspraak voor een vrijblijvende kennismaking met ons innovatieve Vijf Varianten Model!"></Samen>
        </div>
        <Footer header="“Dankzij Flexwijs kwam ik bij een ongelooflijk mooie school!”" text="Clio, leraar Engels binnen het voortgezet onderwijs"></Footer>
    </div>
  )
}

export default Voorscholen