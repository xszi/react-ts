import React from 'react';
import ReactDOM from 'react-dom';
// App组件，大写字母开头
import TodoList from './TodoList';
import LifecycleTest from './LifecycleTest'
import StateTest from './StateTest'
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
    <LifecycleTest />
    <StateTest />
  </React.StrictMode>,
  document.getElementById('root')
);
