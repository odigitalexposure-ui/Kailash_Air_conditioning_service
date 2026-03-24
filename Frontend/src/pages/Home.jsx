import React from 'react'
import Hero from '../home/Hero'
import HomeGalleryPreview from '../home/HomeGalleryPreview'
import Banner from '../home/Banner'
import WhyChooseUs from '../home/WhyChooseUs'
import ServiceProcess from '../home/ServiceProcess'
import StatsSection from '../home/StatsSection'

const Home = () => {
  return (
    <>
    <div className="overflow-hidden overflow-hidden">
      <Hero />
      <Banner/>
      <WhyChooseUs/>
      <HomeGalleryPreview/>
      <ServiceProcess/>
      <StatsSection/>
      
    </div>
    </>
  )
}

export default Home