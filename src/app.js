import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from './axiosInstance';

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
    const getRoutes = async () => axios.get('router/pages')
      .then(response => {
          if (response.data) setRouterMap(response.data);
      })
      .catch(err => { console.log(err) })

    if (!isCancelled) getRoutes();

    return () => { isCancelled = true; }
  }, [])
    
  return(
    <>
      { routerMap.items ?
        <BrowserRouter basename={routerMap.basename}>
          <Layout>
            <Routes>
              {routerMap.items.map(item => {
                return item.post_type == "page" ? 
                    <Route key={item.ID} path={item.post_name} exact element={
                      <Page id={item.ID} postTitle={item.post_title} postName={item.post_name} />
                    }/>
                  :
                    <Route key={item.ID} path={item.post_name} exact element={
                      <Index postTitle={item.post_title} />
                    }/>
              })}
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      : null}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('What are you doing? \nLooking for secrets?');