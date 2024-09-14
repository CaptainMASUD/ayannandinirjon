import React from 'react'
import Footer from './../Footer/Footer';
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
