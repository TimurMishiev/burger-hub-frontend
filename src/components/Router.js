import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing.js';
import App from '../App.js';
import NotFun from './NotFun.js'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' cpmponent={Landing} />
        <Route path='/restaurant/:restaurantId' component={App} />
        <Route component ={NotFun} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;