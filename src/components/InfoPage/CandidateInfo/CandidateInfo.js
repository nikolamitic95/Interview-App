import React from 'react';
import styles from './CandidateInfo.module.css';

import { Container, Table, Row, Col } from 'react-bootstrap';
import { convertDate } from '../../../shared/utilities';


const CandidateInfo = ({ name, email, dob, education }) => {
    return (
        <Container  className={styles.container}>
            <Row >
                <Col lg='4' md='12' sm='12'>
                    <div>
                        <img className={styles.img} src="../user.jpg" />
                    </div>
                </Col>
                <Col lg='8' md='12' sm='12'>
                    <Table className={styles.table} striped borderless hover variant="dark">
                        <thead>
                            <tr>
                                <td colSpan="1">Name:</td>
                                <td>Date of Birth:</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{name}</th>
                                <th>{convertDate(dob)}</th>
                            </tr>
                            <tr className={styles.row}>
                                <td>Email:</td>
                                <td>Education:</td>
                            </tr>
                            <tr>
                                <th>{email}</th>
                                <th>{education}</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export { CandidateInfo }