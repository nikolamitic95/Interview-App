import React from 'react';

import styles from './Search.module.css';

import { Form, FormControl, Row, Col } from 'react-bootstrap';

const Search = () => {
    return (
        <Row className={styles.search}>
            <Col lg='3' className={styles.title}><h5  >Candidates</h5></Col>
            <Col lg='9'>
                <span>
                    <Form >
                        <FormControl type="text" placeholder="Search Candidate" className={`${styles.form} mr-sm-2 `} />
                    </Form>
                </span>
            </Col>
        </Row>
    )
}

export { Search }