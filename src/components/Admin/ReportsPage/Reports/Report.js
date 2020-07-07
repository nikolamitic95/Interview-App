import React from 'react';
import styles from './Reports.module.css';

import { convertDate } from '../../../../shared/utilities';
import { DetailedReport } from '../../../../shared/Modal/DetailedReport'



const Report = ({ id, phase, companyName, candidateName, interviewDate, status, note, openModal, modalIsOpen, removeReport }) => {
    const report = { companyName, candidateName, interviewDate, status, phase, note }

    return (
        <tr>
            <th className={styles.company}>{companyName}<br></br><span className={styles.span}>company</span></th>
            <th className={styles.name}>{candidateName}<br></br><span className={styles.span}>candidate</span></th>
            <th className={styles.date}>{convertDate(interviewDate)}<br></br><span className={styles.span}>interview date</span></th>
            <th className={styles.status}>{status}<br></br><span className={styles.span}>status</span></th>
            <th> <i className={`${styles.icon} fa fa-eye`} onClick={() => { openModal() }}></i>
                <i className="fa fa-close" onClick={() => { removeReport(id) }}></i>
            </th>
            <DetailedReport
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                report={report} />
        </tr>
    )
}

export { Report }