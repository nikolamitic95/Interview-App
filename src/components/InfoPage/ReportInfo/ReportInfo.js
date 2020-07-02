import React from 'react';
import styles from './ReportInfo.module.css';

import { Table, Container, Row, Col } from 'react-bootstrap';
import { convertDate } from '../../../shared/utilities';
import { DetailedReport } from '../../../shared/Modal/DetailedReport';


const ReportInfo = ({ reports, candidateId, openModal, modalIsOpen }) => {

    let thisCandidatesReports = reports.filter(report => report.candidateId === Number(candidateId))

    return (
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Interview Date</th>
                                <th>Status</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {thisCandidatesReports.map((report) => {
                                return (<tr key={report.id}>
                                    <td>{report.companyName}</td>
                                    <td>{convertDate(report.interviewDate)}</td>
                                    <td>{report.status}</td>
                                    <td width='25px'><i className={`${styles.icon} fa fa-eye`} onClick={() => { openModal() }}></i></td>
                                    <DetailedReport
                                        modalIsOpen={modalIsOpen}
                                        openModal={openModal}
                                        report={report}
                                    />
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export { ReportInfo }