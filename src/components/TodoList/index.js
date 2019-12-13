import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
  static propTypes={
    todolist:PropTypes.arrayOf(PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id:PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }))
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todolist.map(todo=>{
              return <TodoItem  key={todo.id} {...todo} changeCompleted={this.props.onCompletedClick}></TodoItem>
            })
          }
        </ul>
      </div>
    )
  }
}
