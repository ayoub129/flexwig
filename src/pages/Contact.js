import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Address from '../component/Address'
import ContactForm from '../component/ContactForm'


const Contact = () => {

  return (
    <div>
        <Header></Header>
        <Hero bg="hero bold" video={false} buttons={false} header_second="Neem contact met ons op" header="Morgen begint vandaag" text="Binnen het onderwijs staat de leerling centraal. Inspirerend en goed onderwijs geven, dat is het doel. Zodat zij zich kunnen ontwikkelen voor de dag van morgen."></Hero>
        <h4 style={{textAlign:"center" , color:"#002c41" , fontSize:"3rem"}}>Contact</h4>
        <ContactForm></ContactForm>
        <Address></Address>
        <Footer header="“Het contact met Flexwijs is prettig en professioneel.”" text="Marjolijn, leraar op een reboundvoorziening"></Footer>
    </div>
  )
}

export default Contact
