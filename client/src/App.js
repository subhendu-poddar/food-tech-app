import React, { Component } from 'react';
import { Link, HashRouter, Switch, Route } from 'react-router-dom'
import AddRestaurant from './RoutePage/AddRestaurant'
import OrderFood from './RoutePage/OrderFood'
import Dashboard from './RoutePage/Dashboard'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div className='navbar'>
            <div className='container'>
              <div className='navbar-container'>
                <Link className='navbar-brand' to='/dashboard'> Dashboard </Link>
                <Link className='navbar-brand' to='/order-food'> Order Food </Link>
                <Link className='navbar-brand' to='/add-restaurant'> Add Restaurants </Link>
              </div>
            </div>
          </div>
          
          <Switch>
            <Route exact path='/'> <Dashboard /> </Route> 
            <Route exact path='/dashboard'> <Dashboard /> </Route>
            <Route exact path='/order-food'> <OrderFood /> </Route>
            <Route exact path='/add-restaurant'> <AddRestaurant /> </Route>
          </Switch>

        </HashRouter>
      </div>
    );
  }
}

export default App;