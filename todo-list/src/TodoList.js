import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleAdd() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接受父组件传递过来的参数
  handleDelete(index) {
    const list =[...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            deleteItem={this.handleDelete} 
            key={index} 
            content={item} 
            index={index}>
          </TodoItem>
        )
      })
    )
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInput}/>
          <button className='red-btn' onClick={this.handleAdd}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    )
  }
}

export default TodoList;

// 0 && 1 会渲染出0
