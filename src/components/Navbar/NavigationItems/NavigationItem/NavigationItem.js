import React from 'react';

import styles from './NavigationItem.module.scss';

const NavigationItem = (props) => {

    const navStyles = (props.post == pageSettings.id) ? [styles.NavItem, styles.Current] : [styles.NavItem];

    return (
        <li className={navStyles.join(' ')}>
            <a href={props.url}>{props.title}</a>
        </li>
    )
}

export default NavigationItem;