import React from 'react'
import './Style.css'
import Hero from './hero/Hero'
import Feature from './feature/Feature'
import Wether from './Weather/Wether'
import HowItWorksSection from './HowItWorksSection/HowItWorksSection'
import Footer from './Footer/Footer'



function Home() {
  return (
    <div>
        <Hero/>
       <Feature/>
       <Wether/>
       <HowItWorksSection/>
       <Footer/>
    </div>
  )
}

export default Home