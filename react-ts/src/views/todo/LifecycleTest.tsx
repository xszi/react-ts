import React from 'react';

// 生命周期函数
class Clock extends React.Component<any, any> {
    constructor(props: any) {
      super(props)
      this.state = {date: new Date()}
      this.clickConsole = this.clickConsole.bind(this)
    }
    
    timerID: any = null
    testName: string = 'testName'

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
      console.log(111, this.testName)
    }
  
    render() {
      return (
        <div>
          <h1 onClick={this.clickConsole}>Hello world!</h1>
          <h2 onClick={this.tick}>It is {this.state.date.toLocaleDateString()}==1111.</h2>
        </div>
      )
    }
  }

  
export default Clock;