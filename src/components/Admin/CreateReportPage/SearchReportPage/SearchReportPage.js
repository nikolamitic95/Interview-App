import React from 'react';
import styles from './SearchReportPage.module.css';

import { Form, FormControl, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchCandidate = ({ searchedCandidate }) => {

    const onSearch = (e) => {
        searchedCandidate(e.target.value)
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

const SearchCompany = ({ searchedCompany }) => {

    const onSearch = (e) => {
        searchedCompany(e.target.value)
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

export { SearchCandidate, SearchCompany }