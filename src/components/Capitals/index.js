import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
export default class Capitals extends Component {
  state = {
    capital: countryAndCapitalsList[0].id,
  }

  onUpdateState = event => {
    this.setState({capital: event.target.value})
  }

  render() {
    const {capital} = this.state

    const resultObject = countryAndCapitalsList.find(
      eachObject => eachObject.id === capital,
    )

    return (
      <>
        <div className="bg-container">
          <div className="white-container">
            <h1>Countries And Capitals</h1>

            <div className="input-para-container">
              <select value={resultObject.id} onChange={this.onUpdateState}>
                {countryAndCapitalsList.map(eachObject => (
                  <option key={eachObject.id} value={eachObject.id}>
                    {eachObject.capitalDisplayText}
                  </option>
                ))}
              </select>

              <p>is Capital of which country</p>
            </div>
            <p className="country-name">{resultObject.country}</p>
          </div>
        </div>
      </>
    )
  }
}
