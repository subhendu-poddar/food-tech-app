import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import AddRestaurant from './RoutePage/AddRestaurant'
import OrderFood from './RoutePage/OrderFood'
import Dashboard from './RoutePage/Dashboard'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
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
            <Route path='/'> <Dashboard /> </Route> 
            <Route path='/dashboard'> <Dashboard /> </Route>
            <Route path='/order-food'> <OrderFood /> </Route>
            <Route path='/order-food?'> <OrderFood /> </Route>
            <Route path='/add-restaurant'> <AddRestaurant /> </Route>
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;