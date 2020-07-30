import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout/Layout';
import Index from './containers/Index/Index';
import Error404 from './containers/Error404/Error404'

import './app.scss';

const App = (props) => {

  let container = null
  switch (pageSettings.page) {
    case 'index':
      container = <Index />
      break;
    default:
      container = <Error404 />
      break;
  }

  return(
    <Layout>
      {container}
    </Layout>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));