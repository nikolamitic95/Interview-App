import React from 'react';
import styles from './AdminHeader.module.css';

import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <Navbar className={styles.header}
            alignLinks="right"
            brand={<a className="brand-logo">Interview Reports</a>}
            id="mobile-nav"
            centerChildren
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
            
            <Link className={styles.link} to='/admin/reports'>
                <NavItem>
                    Reports
                </NavItem>
            </Link>
            <Link  to='/admin/reports/createreport'>
                <NavItem>
                    Create Report
                </NavItem>
            </Link>
        </Navbar>
    )
}

export { AdminHeader }