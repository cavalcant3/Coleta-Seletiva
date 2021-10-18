import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home/index'
import CreateLocation from './Pages/CreateLocation';

const Routes = () => {
    return(
      <BrowserRouter>
          <Route component={Home} path="/" exact/>
          <Route component= {CreateLocation} path="/create-location" />
      </BrowserRouter>
    );
}

export default Routes;