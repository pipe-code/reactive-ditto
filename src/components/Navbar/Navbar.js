import React from 'react';
import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

import styles from './Navbar.module.scss';

const Navbar = (props) => {
    return (
        <header>
            <div className="container">
                <nav className={styles.Navbar}>
                    <Logo />
                    <NavigationItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar;