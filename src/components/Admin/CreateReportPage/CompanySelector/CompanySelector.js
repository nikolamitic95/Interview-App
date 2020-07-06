import React from 'react'

import { Company } from './Company';


const CompanySelector = ({ company, getCompanyData }) => {

    return (
        company.map((comp, i) => (
            <Company
                i={i}
                id={comp.companyId}
                key={comp.companyId}
                name={comp.companyName}
                getData={getCompanyData}
            />
        ))
    )
}

export { CompanySelector }