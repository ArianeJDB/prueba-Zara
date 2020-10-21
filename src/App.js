import React from 'react';
import ProductsList from './components/ProductsList'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() =>
          <ProductsList
          // movies={this.state.movies}
          />
        }
        />
        <Route path="/product" render={params =>
          <ProductDetail
            params={params}
          // movies={this.state.movies}
          />
        }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
