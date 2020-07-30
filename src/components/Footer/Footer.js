import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; Reactive Ditto {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;