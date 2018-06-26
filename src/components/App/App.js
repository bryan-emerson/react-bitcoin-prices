import React, { Component } from 'react';
import Currencies from '../Currencies/Currencies'
import Home from '../Home/Home'
import Price from '../Price/Price'
import './App.css'
import { Route, Link, Switch } from 'react-router-dom'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      price: null,
    }
    this.setPrice = this.setPrice.bind(this)
  }

  setPrice(price) {
    this.setState({price: price})
  }

  render() {
    return(
      <div>
        <nav>
          <Link to="/">
            <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt=""/>
            <h1>Bitcoin prices</h1>
          </Link>
          <Link to="/currencies">View Currencies</Link>
        </nav>
        <main>
          <Switch>
            <Route 
              path="/currencies"
              component={Currencies}
            />
            <Route 
              path="/price/:currency"
              render={routerProps => {
                return <Price setPrice={this.setPrice} {...routerProps} {...this.state}/>
              }}
            />
            <Route
              path="/"
              component={Home}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
