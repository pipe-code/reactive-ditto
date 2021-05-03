import React from 'react';
import styles from './Hamburger.module.scss';

const Hamburger = (props) => {

    const currentStyles = props.open ? [styles.Hamburger, styles.Open] : [styles.Hamburger];

    return (
        <div className={styles.Hamburger} onClick={props.click} className={currentStyles.join(' ')}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;