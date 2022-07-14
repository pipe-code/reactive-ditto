import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = (props) => {

    return (
        <div className={styles.Logo}>
            <NavLink to="/">
                {props.hasLogo ? 
                    <img src={props.logo} alt="Logo" />
                : props.logo }
            </NavLink>
        </div>
    )
}

export default Logo;