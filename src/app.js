import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Containers
import Index from './containers/Index/Index';
import Page from './containers/Page/Page';
import Error404 from './containers/Error404/Error404'

import './app.scss';

const App = () => {

  const [routerMap, setRouterMap] = useState({
    basename: null,
    items: null
  });

  useEffect(() => {
    let isCancelled = false;
    const runAsync = async () => fetch( _dittoURL_ + '/wp-json/router/pages')
      .then(res => res.json())
      .then(response => {
        setRouterMap(response);
      })
      .catch(err => { console.log(err) });

    if (!isCancelled) runAsync();

    return () => { isCancelled = true; }
  }, [])  
    
  return(
    <>
      { routerMap.items ?
        <BrowserRouter basename={routerMap.basename}>
          <Layout>
            <Switch>
              {routerMap.items.map(item => {
                return (
                  <Route key={item.ID} path={item.post_name} exact>
                    {(item.post_type == "page") ? <Page id={item.ID} postTitle={item.post_title} postName={item.post_name} /> : null}
                    {!item.post_type ? <Index postTitle={item.post_title} /> : null}
                  </Route>
                );
              })}
              <Route>
                <Error404 />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      : null}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));

console.log('What are you doing? \nLooking for secrets?');