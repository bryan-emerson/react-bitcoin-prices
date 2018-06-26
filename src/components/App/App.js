import React, { Component } from 'react';
import Home from '../Home/Home'
import './App.css'

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
          <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt=""/>
          <h1>Bitcoin prices</h1>
        </nav>
        <main>
          <Home />
        </main>
      </div>
    )
  }
}

export default App;
