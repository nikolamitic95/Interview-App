import React from 'react';
import styles from './CompanySelector.module.css';

import { Col } from 'react-bootstrap';

const Company = ({ i, id, name, getData }) => {
    return (
        <Col tabindex={i} onClick={() => { getData(id, name) }} className={styles.users} lg='12' md='12' sm='12'>
            <div className={styles.userInfo}>
                <p><span>{name}</span></p>
            </div>
        </Col>
    )
}

export { Company }