import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';



const Navbar = () => {

    const [isToggle, setIsToggle] = useState(false);

    const navToggle = () => {
        setIsToggle(!isToggle);
    }

    const classActive = 'block h-full pb-4 pt-4 md:pb-0 md:pt-7 bg-quaternary';
    const classNoActive = 'block h-full pb-4 pt-4 md:pb-0 md:pt-7 transition-all duration-300 hover:bg-quaternary';
    return (
        <nav className={`bg-black fixed md:left-1/2 transform md:translate-x-m-50 h-20${isToggle ? ' max-md:h-auto' : ''} border-2 border-tertiary z-50 md:top-16 w-full md:w-9/12 overflow-hidden`}>
            <button className='text-tertiary md:hidden float-right' onClick={navToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#00FFFF" viewBox="0 0 26 25" strokeWidth="2" stroke="currentColor" className="w-20 h-15">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <ul className='text-white flex flex-col md:flex-row md:flex-wrap md:justify-around h-full text-center md:items-center mt-20 md:mt-0'>
                <li className='grow h-full'>
                    <NavLink to={'/'} className={({ isActive }) =>
                        isActive ? classActive : classNoActive
                    }>Home</NavLink>
                </li>
                <li className='grow h-full'>
                    <NavLink to={'/about_me'} className={({ isActive }) =>
                        isActive ? classActive : classNoActive
                    }>About_me</NavLink>
                </li>
                <li className='grow h-full'>
                    <NavLink to={'/experiences'} className={({ isActive }) =>
                        isActive ? classActive : classNoActive
                    }>Experiences</NavLink>
                </li>
                <li className='grow h-full'>
                    <NavLink to={'/skills'} className={({ isActive }) =>
                        isActive ? classActive : classNoActive
                    }>Skills</NavLink>
                </li>
                <li className='grow h-full'>
                    <NavLink to={'/projects'} className={({ isActive }) =>
                        isActive ? classActive : classNoActive
                    }>Projects</NavLink>
                </li>
                <li className='grow h-full p-2'>
                    <a href='/resume/Resume-Pramote-Phanon.pdf' target='_BLANK' className='block h-full pb-4 pt-4 md:pb-0 md:pt-4 border-2 border-secondary transition-all duration-300 hover:bg-quaternary'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar