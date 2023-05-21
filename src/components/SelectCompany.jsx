import React from 'react'

const SelectCompany = ({ corp, onChangeHandler, corpId, setCorpId }) => {
    const defaultClass = "border-2 border-tertiary w-full py-2 text-left pl-2 mt-5";
    return (
        <select value={corpId} onChange={(e) => onChangeHandler(e.target.value)} className='w-full h-full bg-quaternary text-white px-5 border-2 border-tertiary focus:outline-tertiary'>
            {corp.map((company) => (
                <option key={company.id} value={company.id} className='bg-black'>
                    {company.name}
                </option>
            ))}
        </select>
    );
}

export default SelectCompany