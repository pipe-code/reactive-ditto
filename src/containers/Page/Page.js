import React, { useState, useEffect } from 'react';
import Directory from '../../components/directory';
import {useStore} from '../../components/store';

const htmlentities = (str) => {
    return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
};

const Page = (props) => {
    const [pageContent, setPageContent] = useState({ have_post: false, content: null });
    const [store, storeDispatch] = useStore();

    useEffect(() => {
        let isCancelled = false;
        if(!store.loader) storeDispatch('TURN_LOADER_ON'); 
        const runAsync = async () => fetch(_dittoURL_ + '/wp-json/page/' + props.id)
            .then(res => res.json())
            .then(response => { 
                setPageContent({ have_post: response.have_post, content: response.content });
            })
            .catch(err => { console.log(err) });
        
        if(!isCancelled) runAsync();

        scroll({top: 0});
    
        return () => { isCancelled = true; }
    }, [])

    useEffect(() => {
        if(pageContent.have_post && store.loader) storeDispatch('TURN_LOADER_OFF');
    }, [pageContent])

    let formatedContent;
    if(pageContent.content) {
        formatedContent = pageContent.content.map((component, index) => {
            return <Directory key={index + 1} numb={index + 1} component={component.acf_fc_layout} content={component.content} />;
        });
    }

    document.title = htmlentities(props.postTitle);

    return (formatedContent ? formatedContent : <div className="container"><p></p></div>);
}

export default Page;