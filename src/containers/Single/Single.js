import React from 'react';

const Single = (props) => {
    return (
        <section>
            <div className="container">
                <p>
                    [PostID]: {props.id} <br/>
                    [ParentSlug]: {props.parentSlug}
                </p>
            </div>
        </section>
    )
}

export default Single;