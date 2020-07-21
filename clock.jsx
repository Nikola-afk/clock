import React from "react";
import "../components/clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.setIntervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="clock-div">
          <h1 className="h-1">Clock</h1>
          <span className="span-1">
            Time -- {this.state.time.toLocaleTimeString()} <span>CET</span>
          </span>
          <span className="span-2">
            Today is -- {this.state.time.toDateString()}
          </span>
        </div>
      </React.Fragment>
    );
  }
}
export default Clock;
