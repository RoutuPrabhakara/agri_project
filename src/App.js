import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/header/Header'
import RealTimeWeatherUpdates from './pages/works/RealTimeWeatherUpdates'
import MarketplaceSection from './pages/MarketplaceSection'
import EducationalResourcesSection from './pages/EducationalResourcesSection'
import ExtremeWeatherAlertsSection from './pages/ExtremeWeatherAlertsSection'
import CropPriceUpdatesSection from './pages/CropPriceUpdatesSection'
import ToolsAndEquipmentSection from './pages/ToolsAndEquipmentSection'
import IrrigationTipsSection from './pages/IrrigationTipsSection'
import GovernmentSchemesSection from './pages/GovernmentSchemesSection'
import CommunitySupportSection from './pages/CommunitySupportSection'
import NavigationToMarkets from './pages/NavigationToMarkets'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reatime-weather' element={<RealTimeWeatherUpdates/>}/>
          <Route path='/realtime-Market' element={<MarketplaceSection/>}/>
          <Route path='/realtime-Educational' element={<EducationalResourcesSection/>}/>
          <Route path='/realtime-Extreme' element={<ExtremeWeatherAlertsSection/>}/>
          <Route path='/realtime-CropPrice' element={<CropPriceUpdatesSection/>}/>
          <Route path='/realtime-Tools' element={<ToolsAndEquipmentSection/>}/>
          <Route path='/realtime-Irrigations' element={<IrrigationTipsSection/>}/>
          <Route path='/realtime-Government' element={<GovernmentSchemesSection/>}/>
          <Route path='/realtime-Community' element={<CommunitySupportSection/>}/>
          <Route path='/realtime-NavigationToMarkets' element={<NavigationToMarkets/>}/>









        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App