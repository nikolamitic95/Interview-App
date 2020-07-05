import React from 'react';

import {Report} from './Report'


const Reports = ({reports, openModal, ModalIsOpen, removeReport}) => {
    return (
        reports.map(report => (
            <Report
            key={report.reportId}
            id={report.reportId}
            phase={report.phase}
            companyName={report.companyName}
            candidateName={report.candidateName}
            interviewDate={report.interviewDate}
            status={report.status}
            note={report.note} 
            openModal={openModal}  
            modalIsOpen={ModalIsOpen} 
            removeReport={removeReport}
            />

        ))

    )
}

export { Reports }