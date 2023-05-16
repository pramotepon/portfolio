import React from 'react'
import ScreenLayout from '../layouts/ScreenLayout'
import GitHubCalendar from 'react-github-calendar'

const ProjectScreen = () => {
  return (
    <ScreenLayout title={'Projects'}>
      <div className='min-h-screen'>
        <h2 className='text-tertiary text-6xl pt-44 text-center drop-shadow-title-shadow'>PROJECTS</h2>
        <div className='text-secondary w-fit mx-auto mt-10'>
          <GitHubCalendar username='pramotepon' colorScheme='dark' />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default ProjectScreen