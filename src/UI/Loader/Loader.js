import React from 'react';
import {useStore} from '../../components/store';

import style from './Loader.module.scss';

const Loader = (props) => {

    const store = useStore()[0];

    let loaderStyles = store.loader ? [style.Container] : [style.Container, style.Loaded];

    return (
        <section className={loaderStyles.join(' ')}>
            <div className={style.Loader}><div></div><div></div></div>
        </section>
    )
}

export default Loader;