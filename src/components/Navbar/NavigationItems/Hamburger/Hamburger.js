import React from 'react';

import styles from './Hamburger.module.scss';

const Hamburger = (props) => {

    const hamburgerStyles = props.open ? [styles.Hamburger, styles.Open] : [styles.Hamburger];

    return (
        <div className={hamburgerStyles.join(' ')} onClick={props.click}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;