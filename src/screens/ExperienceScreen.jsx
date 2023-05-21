import React, { useEffect, useState } from 'react'
import ScreenLayout from '../layouts/ScreenLayout'
import CompanyCard from '../components/CompanyCard'
// Import mockup data Corp.
import dataCorp from '../mocks/corporation';
import expDetail from '../mocks/experienceDetail';
import '../assets/css/screens/experienceScreen.css';
import JobDetailCard from '../components/JobDetailCard';
import SelectCompany from '../components/SelectCompany';


const ExperienceScreen = () => {

  const [corp, setCorp] = useState(dataCorp);
  const [corpDetail, setCorpDetail] = useState(expDetail);
  const [corpId, setCorpId] = useState(expDetail.length);
  const [detail, setDetail] = useState(expDetail[corpId - 1]);
  // console.log(corpId);
  // console.log(detail);
  const showCompany = (id) => {
    setDetail(expDetail[id - 1]);
  }

  const onClickHandler = (id) => {
    setCorpId(id);
    showCompany(id);
  }

  const onChangeHandler = (id) => {
    setCorpId(id);
    showCompany(id);
  }

  useEffect(() => {
  }, [detail]);
  return (
    <ScreenLayout title={'Experiences'}>
      <div className='min-h-screen'>
        <h2 className='text-tertiary text-6xl pt-44 text-center drop-shadow-title-shadow'>Experiences</h2>
        <div className='my-auto flex flex-col lg:flex-row w-full mt-12 min-h-full justify-between h-half'>
          <div className='lg:w-3/12 w-full lg:h-full h-24 border-2 border-tertiary items-stretch px-5 lg:overflow-auto overflow-hidden overflow-box hidden lg:block'>
            <CompanyCard corp={corp} onClickHandler={onClickHandler} corpId={corpId} />
          </div>
          <div className='lg:w-3/12 w-full lg:h-full h-24 border-2 border-tertiary items-stretch px-5 py-3 lg:overflow-auto overflow-hidden overflow-box lg:hidden block'>
            <SelectCompany corp={corp} onChangeHandler={onChangeHandler} corpId={corpId} setCorpId={setCorpId} />
          </div>
          <div className='lg:w-8/12 w-full lg:mt-0 mt-5 h-full border-t-2 border-l-2 border-tertiary items-stretch overflow-auto overflow-box'>
            <JobDetailCard detail={detail} />
          </div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default ExperienceScreen