import React from 'react'
import Navbar from '../components/Navbar'
import ContactBar from '../components/ContactBar'
const ScreenLayout = ({ children }) => {
    return (
        <div className='bg-primary min-h-screen'>
            <Navbar />
            <ContactBar />
            <div className='w-10/12 mx-auto min-h-screen'>
                {children}
            </div>
        </div>
    )
}

export default ScreenLayout