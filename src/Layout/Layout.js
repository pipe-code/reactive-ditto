import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Loader from '../UI/Loader/Loader';

import {initStore} from '../components/store';

initStore();

const Layout = (props) => {

    return (
        <>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Loader />
            <Footer />
        </>
    )
}

export default Layout;