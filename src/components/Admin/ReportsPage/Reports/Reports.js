import React from 'react';

import {Report} from './Report'


const Reports = ({reports, openModal, ModalIsOpen, removeReport}) => {
    return (
        reports.map(report => (
            <Report
            key={report.id}
            id={report.id}
            phase={report.phase}
            company={report.companyName}
            name={report.candidateName}
            date={report.interviewDate}
            status={report.status}
            note={report.note} 
            openMOdal={openModal}  
            modalIsOpen={ModalIsOpen} 
            removeReport={removeReport}
            />

        ))

    )
}

export { Reports }