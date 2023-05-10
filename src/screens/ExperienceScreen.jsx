import React, { useState } from 'react'
import ScreenLayout from '../layouts/ScreenLayout'
import CompanyCard from '../components/CompanyCard'
// Import mockup data Corp.
import dataCorp from '../mocks/corporation';

const ExperienceScreen = () => {

  const [corp, setCorp] = useState(dataCorp);

  return (
    <ScreenLayout title={'Experiences'}>
      <div className='min-h-screen'>
        <h2 className='text-tertiary text-6xl pt-44 text-center drop-shadow-title-shadow'>Experiences</h2>
        <div className='my-auto flex w-full mt-12 min-h-full justify-between h-half'>
          <div className='w-3/12 h-full border-2 border-tertiary items-stretch px-5'>
            <CompanyCard corp={corp} />
          </div>
          <div className='w-8/12 h-full border-2 border-tertiary items-stretch'>

          </div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default ExperienceScreen