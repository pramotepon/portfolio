import React from 'react'
import ScreenLayout from '../layouts/ScreenLayout'

const AboutMeScreen = () => {
  return (
    <ScreenLayout title={'About me'}>
      <div className='flex min-h-screen'>
        <div className='my-auto flex items-center lg:flex-row flex-col w-full lg:mt-auto md:mt-48 mt-28'>
          <div className='flex-auto w-auto lg:w-10'>
            <img src={window.location.origin + '/images/pramote-image.png'} className='lg:w-10/12 w-60 mx-auto' />
          </div>
          <div className='flex-auto w-auto lg:w-64 lg:pl-20'>
            <div className='h-full my-auto'>
              <h2 className='text-tertiary text-6xl mt-16 drop-shadow-title-shadow'>About me</h2>
              <p className='lg:text-3xl text-xl sm:mt-16 mt-0 text-secondary'>
                As a <span className='text-tertiary drop-shadow-title-shadow'>Growth-minded</span> Web Developer with 3+ years of experience in
                <span className='text-tertiary drop-shadow-title-shadow'>PHP</span>, <span className='text-tertiary drop-shadow-title-shadow'>HTML</span>,
                <span className='text-tertiary drop-shadow-title-shadow'>CSS</span>, and <span className='text-tertiary drop-shadow-title-shadow'>SQL</span>,
                I am dedicated to <span className='text-tertiary drop-shadow-title-shadow'>continuously expanding my skills and knowledge</span>.
                I recently graduated from JSD4 with expertise in <span className='text-tertiary drop-shadow-title-shadow'>MERN Stack</span> technology,
                and I am excited to apply this knowledge to new projects. I am a team leader and team player with excellent 
                <span className='text-tertiary drop-shadow-title-shadow'> communication</span> and <span className='text-tertiary drop-shadow-title-shadow'>collaboration</span> skills,
                committed to delivering high-quality work that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default AboutMeScreen