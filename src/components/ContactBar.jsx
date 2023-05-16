import React from 'react'

const ContactBar = () => {
    return (
        <div className='flex md:flex-col bg-transparent h-20 md:h-auto fixed w-full md:w-24 bottom-0 md:right-0 md:top-1/2 md:translate-y-m-50 border-t-2 md:border-t-0 md:border-l-2 border-tertiary text-center z-50'>
            <a href='https://github.com/pramotepon' target='_blank' className='block h-10 w-10 text-white my-5 md:my-10 border-2 border-white rounded-full pt-1.5 mx-auto'><i className="fa-brands fa-github fa-2xl"></i></a>
            <a href='https://www.linkedin.com/in/pramotephanon/' target='_blank' className='block h-10 w-10 text-white my-5 md:my-10 border-2 border-white rounded-full pt-1.5 mx-auto'><i className="fa-brands fa-linkedin-in fa-xl"></i></a>
            <a href='mailto: pramote.p.on@gmail.com' className='block h-10 w-10 text-white my-5 md:my-10 border-2 border-white rounded-full pt-1.5 mx-auto'><i className="fa-solid fa-envelope fa-xl"></i></a>
            <a href='tel:+66891149400' target='_blank' className='block h-10 w-10 text-white my-5 md:my-10 border-2 border-white rounded-full pt-1.5 mx-auto'><i className="fa-solid fa-phone fa-xl"></i></a>
        </div>
    )
}

export default ContactBar