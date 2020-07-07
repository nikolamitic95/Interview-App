import React from 'react';
import styles from './Candidates.module.css';

import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Candidate = ({ name, email, id }) => {
    return (
        <Col  xl='4' lg='auto' md='auto' sm='auto' xs="auto">

            <Link className={styles.link} to={`./info/${id}`}>

                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./user.jpg" />
                    <Card.Body>
                        <Card.Title className={styles.name}>{name}</Card.Title>
                        <Card.Text className={styles.email}>
                            {email}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Link>
        </Col>
    )
}

export { Candidate }