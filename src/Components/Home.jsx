import React from 'react'
import './Style.css'
import Hero from './hero/Hero'
import Feature from './feature/Feature'
import Wether from './Weather/Wether'
import HowItWorksSection from './HowItWorksSection/HowItWorksSection'
import Footer from './Footer/Footer'
import SoilTestingServices from './SoilTestingServices/SoilTestingServices'
import SoilTypeSection from './SoilTestingServices/SoilTypeSection'
import OrganicFarmingSection from './SoilTestingServices/OrganicFarmingSection'
import HorticultureSection from './SoilTestingServices/HorticultureSection'



function Home() {
  return (
    <div>
        <Hero/>
       <Feature/>
       <Wether/>
       <SoilTestingServices/>
       <SoilTypeSection/>
       <OrganicFarmingSection/>
       <HorticultureSection/>
       <HowItWorksSection/>
       <Footer/>
    </div>
  )
}

export default Home