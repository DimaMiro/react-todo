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
    this.handleAddNew = this.handleAddNew.bind(this)
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

  handleAddNew() {
    let itemName
    let prompt = window.prompt("Enter item name:", "")
    if (prompt !== null || prompt !== "") {
      itemName = prompt
    } else {
      alert("Enter item name!")
    }
    this.setState(prevState => {
      let updatedTodos
      if (prevState.todos.length === 0){
        updatedTodos = prevState.todos.push({
          id: 0,
          text: itemName,
          completed: false
        })
      } else {
        const lastItemId = prevState.todos[prevState.todos.length - 1].id
        updatedTodos = prevState.todos.push({
          id: lastItemId + 1,
          text: itemName,
          completed: false
        })
      }
      return updatedTodos
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} item = {item} handleChange = {this.handleChange}/>)
    return (
      <div className = "todo-list">
        <h1>All you need to do...</h1>
        <button onClick={this.handleAddNew}>Add</button>
        {todoItems}
      </div>
    )
  }
}

export default App
