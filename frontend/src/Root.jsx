import React from 'react'
import Footer from './Components/Footer'
// import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='font-custom'>

      <div className='md:mx-10 lg:mx-20'>
         <Navbar></Navbar>
          <div className='min-h-[90vh]'>
              <Outlet></Outlet>
          </div>
      </div>
        <Footer></Footer>
    </div>
  )
  
}

export default Root