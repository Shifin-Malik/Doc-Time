import React from "react"
import Header from "../components/Header"
import SpecialityMenu from "../components/SpecialtyMenu"
import TopDoctors from "../components/TopDoctors"
import Banner from "../components/Banner"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
