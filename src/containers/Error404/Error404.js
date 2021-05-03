import React, {useEffect} from 'react';
import {useStore} from '../../components/store';

const Error404 = () => {

    const [store, storeDispatch] = useStore();

    if(store.loader) storeDispatch('TURN_LOADER_OFF');

    document.title = 'Page not found';

    return (
        <main>
            <div className="container">
                [Error 404]
            </div>
        </main>
    )
}

export default Error404;