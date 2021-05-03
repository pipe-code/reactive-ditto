import React from 'react';
import Hamburger from './Hamburger/Hamburger';
import NavigationItem from './NavigationItem/NavigationItem';

import styles from './NavigationItems.module.scss';

const NavigationItems = (props) => {

    const menuStyle = props.hamburgerOpen ? [styles.MainMenu, styles.MenuOpened] : [styles.MainMenu];

    return ( props.navItems ? 
        <div className={styles.NavItems}>
            <Hamburger click={props.toggleHamburger} open={props.hamburgerOpen} />
            <div className={menuStyle.join(' ')}>
                <div className={styles.Overlay} onClick={() => props.toggleHamburger()}></div>
                <ul>
                    {props.navItems.map((item, index) => {
                        return <NavigationItem 
                                    key={item.ID} 
                                    url={item.url} 
                                    slug={item.slug}
                                    path={item.path} 
                                    title={item.title} 
                                    post={item.page_id} 
                                    index={index}
                                    click={props.toggleHamburger}
                                />
                    })}
                </ul>
            </div>
        </div>
    : null )
}

export default NavigationItems;