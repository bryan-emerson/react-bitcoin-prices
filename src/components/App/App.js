import React, { Component } from 'react';
import Search from '../Search/Search.js'
import './App.css'
import { Route, Link } from 'react-router-dom'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      translation: null
    }
  }

  setTranslation (data) {
    this.setState({
      translation: data
    })
  }

  render() {
    return(
      <div>
        <nav>
          <h1>React Translator</h1>
          <Link to="/search">Search</Link>
        </nav>
        <main>
          <Route 
            path="/"
            render={() => {
              return <Search
                translation={ this.state.translation }
                setTranslation={ (data) => this.setTranslation(data) }
              />
            }}
          />
        </main>
      </div>
    )
  }
}

export default App;
