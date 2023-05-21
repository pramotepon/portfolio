import React from 'react'

const JobDetailCard = (props) => {
    return (
        <div className='p-5 text-secondary'>
            <h3 className='text-4xl'>{props.detail.position}</h3>
            <h5 className='text-sm opacity-80'>{props.detail.duration}</h5>
            <ul className='list-disc p-5 text-xl'>
                {props.detail.detail.map((jobDetail, index) => {
                    return <li key={index}>{jobDetail}</li>
                })}
            </ul>
        </div>
    )
}

export default JobDetailCard