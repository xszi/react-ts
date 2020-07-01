import React from 'react';
import ReactDOM from 'react-dom';
// App组件，大写字母开头
import TodoList from './TodoList';
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// ①
// function tick() {
//   const element = (
//       <div>
//           <h1>Hello world!</h1>
//           <h2>It is {new Date().toLocaleDateString()}.</h2>
//       </div>
//   );
//   ReactDOM.render(
//       element,
//       document.getElementById('root')
//   );
// }

// ②
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello world!</h1>
//       <h2>It is {props.date.toLocaleDateString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   )
// }

// ③
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {date: new Date()}
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello world!</h1>
//         <h2>It is {this.state.date.toLocaleDateString()}.</h2>
//       </div>
//     )
//   }
// }

// function tick() {
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000)