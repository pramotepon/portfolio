import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ContactBar from '../components/ContactBar'
const ScreenLayout = ({ children, title }) => {

        const titleName = () => {
            document.title = 'Portfolio - ' + title || 'Portfolio';
        }
        useEffect(() => {
            titleName();
        }, []);
    return (
        <div className='bg-primary min-h-screen'>
            <Navbar />
            <ContactBar />
            <div className='lg:w-10/12 md:w-8/12 w-11/12 mx-auto min-h-screen z-40'>
                {children}
            </div>
        </div>
    )
}

export default ScreenLayout