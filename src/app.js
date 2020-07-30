import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout/Layout';
import Index from './containers/Index/Index';

import './app.scss';

const App = (props) => {
  return(
    <Layout>
      {pageSettings.page = 'index' ? <Index /> : null}
    </Layout>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));