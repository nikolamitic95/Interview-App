import React from 'react';
import styles from './Header.module.css';

import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = () => {
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
            <Link to='/admin'>
                <NavItem>
                    Login
                </NavItem>
            </Link>
            <Link className={styles.link} to='/'>
                <NavItem>
                    Candidates
                </NavItem>
            </Link>
        </Navbar>
    )
}

export { Header }