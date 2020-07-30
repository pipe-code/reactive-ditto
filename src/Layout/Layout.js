import React from 'react';
import Aux from '../hoc/Aux';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = (props) => {
    return (
        <Aux>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
}

export default Layout;