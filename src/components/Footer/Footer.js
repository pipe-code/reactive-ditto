import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {

    return (
        <footer className={styles.Container}>
            <div className="container">
                © Reactive Ditto Theme {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer;