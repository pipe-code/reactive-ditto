import React, { useState } from 'react';
import Hamburger from './Hamburger/Hamburger';
import NavigationItem from './NavigationItem/NavigationItem';

import styles from './NavigationItems.module.scss';

const NavigationItems = () => {

    const [mainMenu, setMainMenu] = useState({
        items: generalData.header.mainMenu,
        open: false
    });

    const menuStyles = mainMenu.open ? [styles.MainMenu, styles.Open] : [styles.MainMenu];

    const toggleMenuHandler = () => {
        setMainMenu(prevState => {
            return {...prevState, open: !prevState.open}
        })
    }

    return (
        <div className={styles.NavItems}>
            <div className={menuStyles.join(' ')}>
                <ul>
                    {mainMenu.items ? 
                        mainMenu.items.map(item => {
                            return <NavigationItem key={item.ID} url={item.url} title={item.title} post={item.object_id}/>
                        }) 
                        : null
                    }
                </ul>
            </div>
            <Hamburger open={mainMenu.open} click={() => toggleMenuHandler()}/>
        </div>
    )
}

export default NavigationItems;