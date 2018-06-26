import React, { Component } from 'react'
import axios from 'axios'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchPhrase: null,
      langOptions: [
        { short: "en", name: "English" },
        { short: "es", name: "Spanish" },
        { short: "de", name: "German" },
        { short: "fr", name: "French" },
        { short: "it", name: "Italian" },
        { short: "ja", name: "Japanese" },
        { short: "pt", name: "Portugeuse" },
      ],
      sourceLang: null,
      targetLang: null
    }
  }

  handleSearchInput(e) {
    this.setState({
      searchPhrase: e.target.value
    })
  }

  setSourceLang(e) {
    this.setState({
      sourceLang: e.target.value
    })
  }

  setTargetLang(e) {
    this.setState({
      targetLang: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    axios.get('https://watson-api-explorer.mybluemix.net/language-translator/api/v2/translate', {
      params: {
        source: this.state.sourceLang,
        target: this.state.targetLang,
        text: this.state.searchPhrase
      }
    })
    .then((response) => {
      this.props.setTranslation(response.data.translations[0].translation)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    let langOptions = this.state.langOptions.map((language, index) => {
      return(
        <option key={index + 1} value={language.short}>{language.name}</option>
      )
    })
    langOptions.unshift(
      <option key="0">Please Select a Language</option>
    )
    return(
      <div>
        <form onSubmit={(e) => this.handleSearchSubmit(e)}>
          <p>Please enter text to be translated and the source and target languages</p>
          <p>
            <label>Text:</label>
            <textarea onChange={(e) => this.handleSearchInput(e)}></textarea>
          </p>
          <p>
            <label>From: </label>
            <select onChange={(e) => this.setSourceLang(e)}>
              {langOptions}
            </select>
          </p>
          <p>
            <label>To: </label>
            <select onChange={(e) => this.setTargetLang(e)}>
              {langOptions}
            </select>
          </p>
          <input type="submit" value="Translate"/>
        </form>
        <h2>{this.props.translation}</h2>
      </div>
    )
  }
}


export default Search
