import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'


function Banner({books}) {

  const isMobile = window.innerWidth <= 768;
  
  const style = {
    width: isMobile ? '100%' : '500px',
    height: isMobile ? '20vh' : '30vh'
  };


  return (
    <div className='h-[50vh] bg-yellow-100 ease-in-out duration-500 flex justify-between my-4 mx-4 rounded-xl p-4'>
      <div className='p-2 flex flex-col justify-center items-center gap-8'>
        <p className='text-sm md:text-2xl lg:text-4xl xl:text-4xl text-center font-extrabold'>Books to freshen up your bookshelf</p>
        <Link to = '/available' className='md:w-1/3 text-center md:mt-16 rounded-xl p-2 bg-black text-white font-semibold text-xs md:text-base'>Available Books</Link>
      </div>
    
      <div className='mt-12 md:mt-8 mr-4'>
        <Link to = {`/details/${_id}`} className=' h-[150px] w-[300px]'>
          {/* <img className='' src="/All assets/arrow-pointer-solid.svg" width={20} alt="" /> */}
          <img className = "m-4 duration-500 ease-in-out rounded-xl " src={photoUrl} style={style} alt="" />
          <p></p>
          <p className='text-center font-bold md:text-lg flex gap-2 justify-center'><img src="/All assets/eye-regular.svg" width={20} alt="" /> <span className='text-blue-600 underline'>{name}</span></p>
        </Link>
      </div>
    </div>
    
  )
}

export default Banner