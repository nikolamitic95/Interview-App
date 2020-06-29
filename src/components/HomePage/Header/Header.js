import React from 'react';
import styles from './Header.module.css';

import { Navbar, NavItem, Icon } from 'react-materialize';

const Header = () => {
    return (
        <Navbar className={styles.header}
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Interview Reports</a>}
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
            <NavItem>
                Login
  </NavItem>
            <NavItem>
                Candidates
  </NavItem>
        </Navbar>
    )
}

export { Header }