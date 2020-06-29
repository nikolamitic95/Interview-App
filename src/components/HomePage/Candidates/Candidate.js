import React from 'react';
import styles from './Candidates.module.css';

import { Col, Card } from 'react-bootstrap';

const Candidate = ({ name, email }) => {
    return (
        <Col lg='4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./user.png" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {email}
                     </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    )
}

export { Candidate }