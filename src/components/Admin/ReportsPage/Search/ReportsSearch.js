import React from 'react';
import styles from './Search.module.css';

import { Form, FormControl, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const ReportsSearch = ({ searchedReports }) => {

    const onSearch = (e) => {
        searchedReports(e.target.value)
    }

    return (
        <Row className={styles.search}>
            <Col lg='12' md='12' sm='12' className={styles.form}>
                <span>
                    <Form >
                        <FaSearch className={styles.icon} />
                        <FormControl onChange={onSearch} type="text" placeholder="Search" className={`${styles.input} mr-sm-2 `} />
                    </Form>
                </span>
            </Col>
        </Row>
    )
}

export { ReportsSearch }