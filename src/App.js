import React, { Component } from 'react'
import data from './data'
import './styles/App.css'

import TodoItem from "./components/TodoItem"

class App extends Component {
  render() {
    const todoItems = data.map(item => <TodoItem key = {item.id} item = {item} />)
    return (
      <div className = "todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App
