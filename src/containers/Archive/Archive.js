import React from 'react';

const Archive = (props) => {
    return (
        <section>
            <div className="container">
                <p>
                    [Slug]: {props.slug}
                </p>
            </div>
        </section>
    )
}

export default Archive;