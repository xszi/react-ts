import React from 'react';

// 生命周期函数
class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {date: new Date()}
      this.clickConsole = this.clickConsole.bind(this)
    }
    
    componentDidCatch() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      )
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID)
    }
  
    tick() {
      this.setState({
        date: new Date()
      })
    }
  
    clickConsole() {
      console.log(111)
    }
  
    render() {
      return (
        <div>
          <h1 onClick={this.clickConsole}>Hello world!</h1>
          <h2>It is {this.state.date.toLocaleDateString()}.</h2>
        </div>
      )
    }
  }

  
export default Clock;