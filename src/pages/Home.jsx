import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialtyMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SpecialityMenu />
      <TopDoctors/>
      <Banner />  
      <Footer/>   
    </div>
  )
}

export default Home