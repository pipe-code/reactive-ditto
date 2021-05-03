import React from 'react';
import Hello from '../../components/Hello/Hello';

import {useStore} from '../../components/store';

const htmlentities = (str) => {
    return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
};

const Index = (props) => {

    const [store, storeDispatch] = useStore();

    if(store.loader) storeDispatch('TURN_LOADER_OFF');

    document.title = htmlentities(props.postTitle);

    return <Hello />
}

export default Index;