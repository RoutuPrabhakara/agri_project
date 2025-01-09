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
import MachineryManagement from './Components/SoilTestingServices/MachineryManagement'
import OrganicFarmingSection from './Components/SoilTestingServices/OrganicFarmingSection'
import SeasonCrops from './Components/SoilTestingServices/SeasonCrops'
import Weather from './Components/Weather/Wether'


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
          <Route path='/realtime-MachineryManagement' element={<MachineryManagement/>}/>
          <Route path='/realtime-Organic' element={<OrganicFarmingSection/>}/>
          <Route path='/realtime-SeasonCrops' element={<SeasonCrops/>}/>
          <Route path='/realtime-Weather' element={<Weather/>}/>













        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App