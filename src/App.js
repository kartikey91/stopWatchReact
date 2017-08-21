import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      startCount : 10,
      remainingCount : '',
      tempCount : 0
    }
  }

  assigntempCount(temp){
      this.setState({remainingCount : temp});
  }

  changeRemainingCount(remainingCount){
    if(this.state.remainingCount > 0)
      this.setState({remainingCount : remainingCount - 1});
  }

  componentWillMount() {
  this.changeRemainingCount(this.state.startCount);
}

componentDidMount() {
  setInterval(() => this.changeRemainingCount(this.state.remainingCount), 1000);
}

  render() {
    return (
      <div>
        <div>{this.state.remainingCount}</div>
        <input type='text'
          onChange={event => this.setState({tempCount: event.target.value})}
        />
        <button onClick={()=> this.assigntempCount(this.state.tempCount)}>Start</button>
      </div>
    )
  }
}

export default App;
