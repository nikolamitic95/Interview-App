import React from 'react';
import { Table } from 'react-bootstrap';
import { DetailedReport } from '../../../../shared/Modal/DetailedReport';
import { convertDate } from '../../../../shared/utilities';
import styles from './Reports.module.css';

const Report = ({ company, name, status, date, openModal, modalIsOpen, phase, removeReport, id, note }) => {
    const report = { companyName: company, candidateName: name, interviewDate: date, status, phase, note }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className={styles.company}>{company}</th>
                    <th className={styles.name}>{name}</th>
                    <th className={styles.date}>{convertDate(date)}</th>
                    <th className={styles.status}>{status}</th>
                    <th> <i className={`${styles.icon} fa fa-eye`} onClick={() => { openModal() }}></i>
                        <i className="fa fa-close" onClick={() => { removeReport(id) }}></i>
                    </th>
                    <DetailedReport modalIsOpen={modalIsOpen} openModal={openModal} report={report}></DetailedReport>
                </tr>
            </thead>
        </Table>
    )
}

export { Report }