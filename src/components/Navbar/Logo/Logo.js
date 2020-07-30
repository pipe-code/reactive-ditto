import React from 'react';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <a href={_dittoURL_} rel="home">
                { generalData.header.hasCustomLogo ?
                    <img src={generalData.header.customLogo} alt="Logo" />
                    : generalData.header.blogName
                }
            </a>
        </div>
    )
}

export default Logo;