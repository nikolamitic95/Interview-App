import React from 'react';
import styles from './AdminHeader.module.css';

import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { storageService } from '../../../services/storageService';

const AdminHeader = () => {

    const logOut = () => {
        storageService.logOut()
    }

    return (
        <Navbar className={styles.header}
            alignLinks="right"
            brand={<a className="brand-logo">Interview Reports</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <Link className={styles.link} to='/'>
                <NavItem onClick={logOut} className={styles.headerColor}>
                    Logout
                </NavItem>
            </Link>
            <Link className={styles.link} to='/admin/reports'>
                <NavItem className={styles.headerColor}>
                    Reports
                </NavItem>
            </Link>
            <Link className={styles.link} to='/admin/reports/createreport'>
                <NavItem className={styles.headerColor}>
                    Create Report
                </NavItem>
            </Link>
        </Navbar>
    )
}

export { AdminHeader }