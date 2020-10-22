import React from 'react';
import ProductsList from './components/ProductsList'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
