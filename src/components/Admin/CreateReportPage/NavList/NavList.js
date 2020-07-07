import React from 'react';
import styles from './NavList.module.css';

const NavList = ({ candidateName, companyName, wizardStep }) => {
    return (
        <div className={styles.nav}>
            {wizardStep === 1 &&
                <ul className={styles.navList}>
                    <li><h5 className={styles.active}><span>1</span> Select Candidate</h5></li>
                    <li><h5><span>2</span> Select Company</h5></li>
                    <li><h5><span>3</span> Fill Report Details</h5></li>
                </ul>
            }

            {wizardStep === 2 &&
                <ul className={styles.navList}>
                    <li><h5><span>1</span> Select Candidate</h5></li>
                    <li><h5 className={styles.active}><span>2</span> Select Company</h5></li>
                    <li><h5><span>3</span> Fill Report Details</h5></li>
                </ul>}

            {wizardStep === 3 &&
                <ul className={styles.navList}>
                    <li><h5><span>1</span> Select Candidate</h5></li>
                    <li><h5><span>2</span> Select Company</h5></li>
                    <li><h5 className={styles.active}><span>3</span> Fill Report Details</h5></li>
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