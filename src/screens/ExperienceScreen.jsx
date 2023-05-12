import React, { useEffect, useState } from 'react'
import ScreenLayout from '../layouts/ScreenLayout'
import CompanyCard from '../components/CompanyCard'
// Import mockup data Corp.
import dataCorp from '../mocks/corporation';
import expDetail from '../mocks/experienceDetail';
import '../assets/css/screens/experienceScreen.css';
import JobDetailCard from '../components/JobDetailCard';

const ExperienceScreen = () => {

  const [corp, setCorp] = useState(dataCorp);
  const [corpDetail, setCorpDetail] = useState(expDetail);
  const [detail, setDetail] = useState(expDetail[expDetail.length - 1]);

  const onClickHandler = (id) => {
    const companyDetail = corpDetail.filter((comp) => comp.id === id);
    setDetail(...companyDetail);
  }

  useEffect(() => {
    // console.log(detail);
  }, [detail]);

  return (
    <ScreenLayout title={'Experiences'}>
      <div className='min-h-screen'>
        <h2 className='text-tertiary text-6xl pt-44 text-center drop-shadow-title-shadow'>Experiences</h2>
        <div className='my-auto flex w-full mt-12 min-h-full justify-between h-half'>
          <div className='w-3/12 h-full border-2 border-tertiary items-stretch px-5 overflow-auto overflow-box'>
            <CompanyCard corp={corp} onClickHandler={onClickHandler} jobDetailId={detail.id} />
          </div>
          <div className='w-8/12 h-full border-t-2 border-l-2 border-tertiary items-stretch overflow-auto overflow-box'>
            <JobDetailCard detail={detail} />
          </div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default ExperienceScreen