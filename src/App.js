import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsList from './components/productList/ProductsList'
import ProductDetail from './components/productDetail/ProductDetail'

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() =>
          <ProductsList />
        } />
        <Route path="/product/:id" render={params =>
          <ProductDetail params={params} />
        }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
