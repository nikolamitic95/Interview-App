import React from 'react';
import Modal from 'react-modal';
import style from './DetailedReport.module.css';

import { Container, Col, Row } from 'react-bootstrap';
import { convertDate } from '../utilities';

const DetailedReport = ({modalIsOpen, openModal, report}) => {
    return (<Modal

        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => { openModal() }}
        style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(86, 186, 237, 0.1)'
            },
            content: {
                position: 'absolute',
                top: '80px',
                left: '80px',
                right: '80px',
                bottom: '80px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
            }
        }}
        contentLabel="modal"

    >
        <Container>
            <Row>
                <Col>
                    <h4 className={style.name}>
                        {report.candidateName}
                    </h4>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col lg="4" md="6" sm="12">
                    <ul className={style.ul}>
                        <li className={style.li}>Company<h5 className={style.lih5}>{report.companyName}</h5></li>
                        <li className={style.li}>Interview Date<h5 className={style.lih5}>{convertDate(report.interviewDate)}</h5></li>
                        <li className={style.li}>Phase<h5 className={style.lih5}>{report.phase}</h5></li>
                        <li className={style.li}>Status<h5 className={style.lih5}>{report.status}</h5></li>
                    </ul>
                </Col>
                <Col lg='8' md="6" sm="12">
                    <ul>
                        <li className={style.li}>Notes<p className={style.reportText}>{report.note}.</p></li>
                    </ul>
                </Col>
            </Row>
        </Container>

    </Modal>)
}

export { DetailedReport }