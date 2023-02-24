import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandom = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNum = this.getRandom()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state

    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">Count {count}</h1>

          <p className="title">Count is {text}</p>

          <button className="btn" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase by Random Number between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
