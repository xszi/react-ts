import React, { Component } from 'react';
import TodoList from './TodoList';
import LifecycleTest from './LifecycleTest'
import StateTest from './StateTest'
import './style.css'

class Todo extends Component<any, any> {

    render() {
        return (
            <div>
                <div>
                    <TodoList />
                    <LifecycleTest />
                    <StateTest />
                </div>
            </div>
        )
    }
}

export default Todo;

// 0 && 1 会渲染出0
