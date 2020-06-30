import React from 'react';
import styles from './CandidateInfo.module.css';

import { Container, Table, Row, Col } from 'react-bootstrap';
import { convertDate } from '../../../shared/utilities';


const CandidateInfo = ({ name, email, dob, education }) => {
    return (
        <Container className={styles.container}>
            <Row>
                <Col lg='4'>
                    <div>
                        <img className={styles.img} src="../user.png" />
                    </div>
                </Col>
                <Col lg='8'>
                    <Table className={styles.table} striped borderless hover variant="dark">
                        <thead>
                            <tr>
                                <th colSpan="1">Name:</th>
                                <th>Date of Birth:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{convertDate(dob)}</td>
                            </tr>
                            <tr className={styles.row}>
                                <th>Email:</th>
                                <th>Education:</th>
                            </tr>
                            <tr>
                                <td>{email}</td>
                                <td>{education}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export { CandidateInfo }