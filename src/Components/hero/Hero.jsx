import React from 'react'
import './style.css'
import video from '../../assets/media/video1.mp4';

function Hero() {
  return (
    <div className="hero">
    <div className="video">
      <video src={video} autoPlay muted loop className='w-100 '></video>
       
       <div className="content">
       <h1 className='display-1 fw-bold text-white'>Empowering Farmers <br /> with <span className="text-warning">Tools and Knowledge.</span></h1>
       <p className='fs-5 text-secondary fw-normal'><span className='fw-bold  text-warning '><u>Modernization Theory:</u> </span><span className='text-white'>This theory posits that agricultural development 
        is a key driver of overall 
        economic growth and progress. <br />The modernization of agriculture—through new technologies, <br /> better tools, and education—can lead to increased productivity, 
       higher incomes, and improved living standards for farmers.</span></p>
       <div className="d-flex gap-3 align-items-center flex-wrap justify-content-center">
        <a href="/realtime-Market"><button className="btn btn-warning p-3 px-5 rounded-pill fs-5 btn-hero">Explore Marketplace</button></a>
        <a href="/realtime-Weather"><button className="btn btn-outline-warning p-3 px-5 rounded-pill fs-5 btn-hero ">Check Weather Now</button></a>
       </div>
       </div>
    </div>
  </div>
  )
}

export default Hero