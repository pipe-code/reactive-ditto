import React from 'react';

const Page = (props) => {
    return (
        <section>
            <div className="container">
                <p>
                    [PostID]: {props.id}
                </p>
            </div>
        </section>
    )
}

export default Page;