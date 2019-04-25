import React, { Component } from 'react'
import data from './data'
import './styles/App.css'

import TodoItem from "./components/TodoItem"

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: data
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} item = {item} handleChange = {this.handleChange}/>)
    return (
      <div className = "todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App
