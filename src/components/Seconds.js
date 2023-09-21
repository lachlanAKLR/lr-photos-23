import React from 'react';

class Seconds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getSeconds(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().getSeconds(),
    });
  }

  render() {
    return <p>{(this.state.time + 0 < 10 ? '0' : '') + (this.state.time + 0)}</p>;
  }
}

export default Seconds;

