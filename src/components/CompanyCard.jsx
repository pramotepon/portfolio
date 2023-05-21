import React from 'react'

const CompanyCard = ({ corp, onClickHandler, corpId }) => {

    const defaultClass = "border-2 border-tertiary w-full py-2 text-left pl-2 text-white mt-5";

    const showCompanyList = (company) => {
        let className = corpId === company.id ? defaultClass + ' bg-quaternary' : defaultClass;
        return (
            <button className={className} key={company.id} onClick={() => onClickHandler(company.id)} >
                <span className='text-1xl'>{company.name}</span>
            </button>
        );
    };

    return corp.map(showCompanyList);
};

export default CompanyCard