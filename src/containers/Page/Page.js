import React, { useState, useEffect } from 'react';
import Directory from '../../components/directory';
import axios from '../../axiosInstance';
import { useStore } from '../../components/store';

const htmlentities = (str) => {
    return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
};

const Page = ({ id, postTitle }) => {
    const [pageContent, setPageContent] = useState({ have_post: false, content: null });
    const [store, storeDispatch] = useStore();

    useEffect(() => {
        let isCancelled = false;
        if(!store.loader) storeDispatch('TURN_LOADER_ON'); 
        const getPage = async () => axios.get(`page/${id}`)
            .then(response => {
                if (response.data) {
                    const { have_post, content } = response.data;
                    setPageContent({ have_post: have_post, content: content });
                }
            })
            .catch(err => { console.log(err) })
        
        if(!isCancelled) getPage();

        scroll({top: 0});
    
        return () => { isCancelled = true; }
    }, [ id ])

    useEffect(() => {
        if(pageContent.have_post && store.loader) storeDispatch('TURN_LOADER_OFF');
    }, [pageContent])

    let formatedContent;
    if(pageContent.content) {
        formatedContent = pageContent.content.map((component, index) => {
            return <Directory key={index + 1} numb={index + 1} component={component.acf_fc_layout} content={component.content} />;
        });
    }

    document.title = htmlentities(postTitle);

    return (formatedContent ? formatedContent : <div className="container"></div>);
}

export default Page;