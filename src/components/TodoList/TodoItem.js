import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props){
    super(props)
    this.changeCompleted=this.changeCompleted.bind(this)
  }
  changeCompleted(id){
    this.props.changeCompleted(id)
  }
  shouldComponentUpdate(nextProps,nextState){
    return nextProps.completed!==this.props.completed
  }
  render() {
    const {id,completed,title}=this.props
    return (
      <div>
        <li className={completed?'completed':''}>
          <input type="checkbox" checked={completed} onChange={()=>this.changeCompleted(id)}></input>{title}
        </li>
      </div>
    )
  }
}
