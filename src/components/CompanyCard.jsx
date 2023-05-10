import React from 'react'

const CompanyCard = ({ corp }) => {
    const showCompanyList = (company) => {
        return (
            <button className='border-2 border-tertiary w-full py-2 text-left pl-2 text-white mt-5' key={company.id}>
                <span className='text-1xl'>{company.name}</span>
            </button>
        );
    };
    return (
        <div>
            {corp.map(showCompanyList)}
        </div>
    )
};

export default CompanyCard