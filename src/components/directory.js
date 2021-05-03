import React, {Suspense} from 'react';
import lazy from "react-lazy-with-preload";

// Components

const Directory = (props) => {
    return (
        <Suspense fallback={<div></div>}>
            
        </Suspense>
    )
}

export default Directory;