import React from 'react'
import ScreenLayout from '../layouts/ScreenLayout'

const AboutMeScreen = () => {
  return (
    <ScreenLayout title={'About me'}>
      <div className='flex min-h-screen'>
        <div className='my-auto flex w-full'>
          <div className='flex-auto w-10'>
            <img src={window.location.origin + '/images/pramote-image.png'} className='w-full' />
          </div>
          <div className='flex-auto w-64 pl-20'>
            <div className='h-full my-auto'>
              <h2 className='text-tertiary text-6xl mt-16 drop-shadow-title-shadow'>About me</h2>
              <p className='text-3xl mt-16 text-secondary'>
                Lorem ipsum dolor sit amet <span className='text-tertiary'>consectetur</span> adipisicing elit. Cupiditate culpa vitae reprehenderit dicta sunt,
                dolorum nobis nam cum ratione laudantium <span className='text-tertiary'>consectetur</span> cumque sed, ea similique earum! Ipsa possimus rem numquam.
                Lorem ipsum dolor sit amet <span className='text-tertiary'>consectetur</span> adipisicing elit. Cupiditate culpa vitae reprehenderit dicta sunt,
                dolorum nobis nam cum ratione laudantium <span className='text-tertiary'>consectetur</span> cumque sed, ea similique earum! Ipsa possimus rem numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default AboutMeScreen