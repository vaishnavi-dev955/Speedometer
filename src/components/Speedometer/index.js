// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="background-container">
        <h1 className="title1">SPEEDOMETER</h1>
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="title2">Speed is {speed} mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            className="custom-button"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="custom-button2"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
