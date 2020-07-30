import React from 'react';

import styles from './NavigationItem.module.scss';

const NavigationItem = (props) => {
    return (
        <li className={styles.NavItem}>
            <a href={props.url}>{props.title}</a>
        </li>
    )
}

export default NavigationItem;