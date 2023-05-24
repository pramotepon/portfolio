import ScreenLayout from '../layouts/ScreenLayout'
import GitHubCalendar from 'react-github-calendar'

import "../assets/css/screens/projectScreen.css"

const ProjectScreen = () => {

  return (
    <ScreenLayout title={'Projects'}>
      <div className='min-h-screen'>
        <h2 className='text-tertiary text-6xl pt-44 text-center drop-shadow-title-shadow'>PROJECTS</h2>
        <div className='mt-8'>

          {/* Github */}
          <div className='text-center mt-8'>
            <a href='https://github.com/pramotepon' className='text-tertiary' target='_BLANK'>github.com/pramotepon</a>
          </div>
          <div className='text-secondary w-fit mx-auto mt-8'>
            <GitHubCalendar username='pramotepon' colorScheme='dark' />
          </div>
          {/* Project block */}
          <div className='lg:flex relative mt-16 h-auto items-center'>
            {/* Project image */}
            <div className='project-image grow w-50 h-80 m-3 relative'>
              <div className='absolute left-52 h-full overflow-hidden'>
                <img src={window.location.origin + '/images/projects/giwon-weight-lose.png'} />
              </div>
            </div>
            {/* Project text */}
            <div className='project-text-container grow w-50 h-60 m-3 relative'>
              <div className='project-text-block absolute h-full w-full border-2 border-tertiary lg:right-52 rounded-lg py-2 px-5'>
                <h1 className='text-tertiary'>G-Trainee</h1>
                <p className='text-white text-sm'>
                  Your project is a web application developed using the MERN stack, encompassing MongoDB for the database, Express.js for the backend framework,
                  React for the frontend, and Node.js for server-side JavaScript, incorporating features such as secure password hashing with bcrypt, JWT-based login authentication,
                  password reset functionality through email using Nodemailer, image uploading capability leveraging Cloudinary, user data management with useContext,
                  data retrieval from external APIs via Axios, and adopting Agile Scrum methodology along with Gitflow for efficient project management and version control.
                </p>
                <div className='tech-use mt-3'>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 text-tertiary">HTML</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 text-tertiary">CSS</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 text-tertiary">JavaScript</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 text-tertiary">Node.js</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 text-tertiary">Express</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 text-tertiary">React</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 text-tertiary">Mongodb</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 text-tertiary">Git flow</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 text-tertiary">Figma</span>
                </div>
                <div className='text-right text-white link-block'>
                  <a className='ml-3' href='https://github.com/pramotepon/reborn-giwon' target='_BLANK'>
                    <i className="fa-brands fa-github fa-2xl"></i>
                  </a>
                  <a className='ml-3' href='https://reborn-giwon.vercel.app/' target='_BLANK'>
                    <i className="fa-solid fa-globe fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </ScreenLayout>
  )
}

export default ProjectScreen