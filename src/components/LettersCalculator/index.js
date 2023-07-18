import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changeCount = () => {
    this.setState(pre => ({count: pre.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="con">
        <div className="con1">
          <div className="sub1">
            <h1 className="head">
              Calculate the
              <br />
              Letters you <br />
              enter
            </h1>
            <label className="para" for="ok">
              Enter the phrase
            </label>
            <input
              id="ok"
              type="text"
              className="inputOf"
              placeholder="Enter the phrase"
              onChange={this.changeCount}
            />
            <br />
            <p type="button" className="btn">
              No.of letters: {count}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
