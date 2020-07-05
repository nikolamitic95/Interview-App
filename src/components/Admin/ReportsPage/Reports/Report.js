import React from 'react';
import { Table } from 'react-bootstrap';
import { ModalReport } from '../Modal/Modal';
import { convertDate } from '../../../../shared/utilities';

import styles from './Reports.module.css';

const Report = ({ id, phase, companyName, candidateName, interviewDate, status, note, openModal, modalIsOpen, removeReport }) => {
     const report = { companyName, candidateName, interviewDate, status, phase, note }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className={styles.company}>{companyName}<br></br><span className={styles.span}>company</span></th>
                    <th className={styles.name}>{candidateName}<br></br><span className={styles.span}>candidate</span></th>
                    <th className={styles.date}>{convertDate(interviewDate)}<br></br><span className={styles.span}>interview date</span></th>
                    <th className={styles.status}>{status}<br></br><span className={styles.span}>status</span></th>
                    <th> <i className={`${styles.icon} fa fa-eye`} onClick={() => { openModal() }}></i>
                        <i className="fa fa-close" onClick={() => { removeReport(id) }}></i>
                    </th>
                    <ModalReport
                        modalIsOpen={modalIsOpen}
                        openModal={openModal}
                        report={report}
                    />
                </tr>
            </thead>
        </Table>
    )
}

export { Report }