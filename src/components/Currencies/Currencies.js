import React, { Component } from 'react'
import './Currencies.css'
import listOfCurrencies from './list.json'
import { Link } from 'react-router-dom'

class Currencies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currencies: listOfCurrencies
    }
  }

  render() {
    let list = listOfCurrencies.map(item => {
      return (
        <div className="currency" key={item.currency}>
          <p><Link to={"/price/" + item.currency}>{item.currency}</Link>: {item.country}</p>
        </div>
      )
    })
    return (
      <div>
        {list}
      </div>
    )
  }
}


export default Currencies
