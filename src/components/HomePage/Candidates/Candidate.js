import React from 'react';
import styles from './Candidates.module.css';

import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Candidate = ({ name, email, id }) => {
    return (
        <Col xl='4' lg='6' md='6' sm='12'>

            <Link to={`./info/${id}`}>

                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./user.png" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {email}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Link>
        </Col>
    )
}

export { Candidate }