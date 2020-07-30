import React, { useState } from 'react';

const Page = (props) => {
    const [pageContent, setPageContent] = useState({haveposts: true});

    fetch(_dittoURL_ + '/wp-json/page/' + props.id).then(res => res.json())
        .then(response => { if(response[0].haveposts) setPageContent(response[0]) })
        .catch(err => { console.log(err) });

    return (
        <section>
            {pageContent.haveposts ?
                <div className="container">
                    <h1>{pageContent.title}</h1>
                    <p dangerouslySetInnerHTML={{__html: pageContent.content}} />
                </div>
                : null
            }
        </section>
    )
}

export default Page;