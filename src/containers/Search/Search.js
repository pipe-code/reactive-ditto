import React from 'react';
import Aux from '../../hoc/Aux';

const Search = (props) => {
    return (
        <section>
            <div className="container">
                <p>
                    [Search]: {props.query}
                </p>
            </div>
        </section>
    )
}

export default Search;