import React, { useEffect, useState } from 'react'
import ScreenLayout from '../layouts/ScreenLayout'

const HomeScreen = () => { 
  return (
    <ScreenLayout title={'Home'}>
      <div className='flex min-h-screen'>
        <div className='my-auto'>
          <h1 className='text-tertiary text-9xl'>I am</h1>
          <h1 className='text-tertiary text-9xl'>Full Stack</h1>
          <h1 className='text-tertiary text-9xl'>Web Developer</h1>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default HomeScreen