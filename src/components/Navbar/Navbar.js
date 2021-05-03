import React, {useState, useEffect} from 'react';
import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

import styles from './Navbar.module.scss';

const Navbar = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const [navItems, setNavItems] = useState({'has_logo': false, 'logo': null, 'menu': null});

    useEffect(() => {
        let isCancelled = false;
        const runAsync = async () => fetch( _dittoURL_ + '/wp-json/navigation/main_menu')
            .then(res => res.json())
            .then(response => {
                setNavItems(response);
            })
            .catch(err => { console.log(err) });
        
        if (!isCancelled) runAsync();

        return () => { isCancelled = true; }
    }, []);

    const toggleHamburger = () => {
        setHamburgerOpen(prevState => { return !prevState });
    }

    return (
        <header>
            <div className="container">
                <nav className={styles.Navbar}>
                    <Logo hamburgerOpen={hamburgerOpen} hamburgerHandler={setHamburgerOpen} hasLogo={navItems.has_logo} logo={navItems.logo} />
                    <NavigationItems toggleHamburger={toggleHamburger} hamburgerOpen={hamburgerOpen} navItems={navItems.menu} />
                </nav>
            </div>
        </header>
    )
}

export default Navbar;