import React, { useEffect, useState } from 'react'
import ScreenLayout from '../layouts/ScreenLayout'

const HomeScreen = () => { 
  return (
    <ScreenLayout title={'Home'}>
      <div className='flex min-h-screen'>
        <div className='my-auto text-6xl sm:text-8xl md:text-9xl'>
          <h1 className='text-tertiary'>I am</h1>
          <h1 className='text-tertiary'>Full Stack</h1>
          <h1 className='text-tertiary'>Web Developer</h1>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default HomeScreen