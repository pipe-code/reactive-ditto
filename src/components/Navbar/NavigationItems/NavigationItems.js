import React, { useState, useEffect } from 'react';
import Hamburger from './Hamburger/Hamburger';
import NavigationItem from './NavigationItem/NavigationItem';

import styles from './NavigationItems.module.scss';

const NavigationItems = () => {

    const [mainMenu, setMainMenu] = useState({
        items: null,
        open: false
    });

    useEffect(() => {
        fetch( _dittoURL_ + '/wp-json/navigation/main_menu')
            .then(res => res.json())
            .then(response => {
                console.log(response);
                setMainMenu(prevState => {
                    return {...prevState, items: response}
                });
            })
    }, []);

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
                            return <NavigationItem key={item.ID} url={item.url} title={item.title} post={item.page_id}/>
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