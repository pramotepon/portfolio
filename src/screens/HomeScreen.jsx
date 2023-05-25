import React, { useEffect, useState } from 'react'
import ScreenLayout from '../layouts/ScreenLayout'
import { TypeAnimation } from 'react-type-animation';

const HomeScreen = () => {
  return (
    <ScreenLayout title={'Home'}>
      <div className='flex min-h-screen'>
        <div className='my-auto text-6xl sm:text-8xl md:text-9xl text-tertiary'>
          <TypeAnimation
            style={{ whiteSpace: 'pre-line', display: 'block' }}
            sequence={[
              `I am\nFull Stack\nWeb Developer`,
            ]}
          />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default HomeScreen