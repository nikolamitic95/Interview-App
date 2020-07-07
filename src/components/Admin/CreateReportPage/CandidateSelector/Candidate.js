import React from 'react';
import styles from './CandidateSelector.module.css';

import { Col } from 'react-bootstrap';

const Candidate = ({ i, id, name, email, getData }) => {
    return (

        <Col tabindex={i} onClick={() => { getData(id, name) }} className={styles.users} lg='6' md='12' sm='12'>
            <div className={styles.userImg}>
                <img className={styles.img} src='../../user.jpg' ></img>
            </div>
            <div className={styles.userInfo}>
                <p><span>{name}</span></p>
                <p>{email}</p>
            </div>
        </Col>
    )
}

export { Candidate }