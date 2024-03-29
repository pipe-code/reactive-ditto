import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.scss';

const NavigationItem = (props) => {
    return (
        <li onClick={props.click} className={styles.NavItem}>
            <NavLink to={props.path}>
                {props.title}
            </NavLink>
        </li>
    )
}

export default NavigationItem;