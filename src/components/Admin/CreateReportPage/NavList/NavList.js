import React from 'react';
import styles from './NavList.module.css';

const NavList = ({ candidateName, companyName, wizardStep }) => {
    return (
        <div className={styles.nav}>
            {wizardStep === 1 &&
                <ul className={styles.navList}>
                    <li className={`${styles.flex} ${styles.active}`}>
                        <span className={styles.circle}>1</span>
                        <span>Select Candidate</span>
                    </li>
                    <li className={styles.flex}>
                        <span className={styles.circle}>2</span>
                        <span>Select Company</span>
                    </li>
                    <li className={styles.flex}>
                        <span className={styles.circle}>3</span>
                        <span>Fill Report Details</span>
                    </li>
                </ul>
            }

            {wizardStep === 2 &&
                <ul className={styles.navList}>
                    <li className={styles.flex}>
                        <span className={styles.circle}>1</span>
                        <span>Select Candidate</span>
                    </li>
                    <li className={`${styles.flex} ${styles.active}`}>
                        <span className={styles.circle}>2</span>
                        <span>Select Company</span>
                    </li>
                    <li className={styles.flex}>
                        <span className={styles.circle}>3</span>
                        <span>Fill Report Details</span>
                    </li>
                </ul>}

            {wizardStep === 3 &&
                <ul className={styles.navList}>
                    <li className={styles.flex}>
                        <span className={styles.circle}>1</span>
                        <span>Select Candidate</span>
                    </li>
                    <li className={styles.flex}>
                        <span className={styles.circle}>2</span>
                        <span>Select Company</span>
                    </li>
                    <li className={`${styles.flex} ${styles.active}`}>
                        <span className={styles.circle}>3</span>
                        <span>Fill Report Details</span>
                    </li>
                </ul>}

            {wizardStep === 2 &&
                <div className={styles.fullContent}>
                    <hr className={styles.line}></hr>
                    <ul>
                        <li className={styles.title}>Candidate:</li>
                        <li><p className={styles.content}>{candidateName}</p></li>
                    </ul>
                </div>}

            {wizardStep === 3 &&
                <div className={styles.fullContent}>
                    <hr className={styles.line}></hr>
                    <ul>
                        <li className={styles.title}>Candidate:</li>
                        <li><p className={styles.content}>{candidateName}</p></li>
                        <li className={styles.title}>Company:</li>
                        <li><p className={styles.content}>{companyName}</p></li>
                    </ul>
                </div>}
        </div>
    )
}


export { NavList }