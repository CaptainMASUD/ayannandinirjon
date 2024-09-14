import React from 'react'
import Banner from '../Banner/Banner'
import SmallCardsBanner from '../SmallCardsBanner/SmallCardsBanner'
import HomeCards from '../HomeCards/HomeCards'
import PlacesCards from '../PlacesCards/PlacesCards'
import FunCards from '../FunCards/FunCards'
import ContactMe from '../ContactMe/ContactMe'
import Navbar from '../Navbar/Navbar'
import Skills from '../Skills/Skills'
import Videos from '../Videos/Videos'
import Projects from '../Projects/Projects'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <SmallCardsBanner/>
      <Skills/>
      <Projects/>
      <Videos/>
      <HomeCards/>
      <PlacesCards/>
      {/* <FunCards/> */}
      <ContactMe/>
    </div>
  )
}

export default Home
