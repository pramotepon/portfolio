import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const classActive = 'block h-full pt-7 bg-quaternary';
    const classNoActive = 'block h-full pt-7 transition-all duration-300 hover:bg-quaternary';
    return (
        <nav className='bg-black fixed left-1/2 transform translate-x-m-50 top-16 w-9/12 h-20 border-2 border-tertiary z-50'>
            <ul className='text-white flex flex-wrap justify-around h-full text-center items-center'>
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
                    <a href='/resume/Resume-Pramote-Phanon.pdf' target='_BLANK' className='block h-full pt-4 border-2 border-secondary transition-all duration-300 hover:bg-quaternary'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar