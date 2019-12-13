import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TodoInput extends Component {
  constructor(props){
    super(props)
    this.state={
      value:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.handleKeyUp=this.handleKeyUp.bind(this)
  }
  static propTypes={
    addTodoClick:PropTypes.func.isRequired
  }
  handleKeyUp(e){
    if(e.keyCode===13){
      this.handleClick()
    }
  }
  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }
  handleClick(){
    if(this.state.value===''){
      return 
    }
    this.props.addTodoClick(this.state.value)
    this.setState({
      value:''
    })
    this.refs.input.focus()
  }
  render() {
    const {value}=this.state
    return (
      <div>
        <input ref="input" value={value} onChange={this.handleChange} onKeyUp={this.handleKeyUp}></input>
        <button onClick={this.handleClick}>添加</button>
      </div>
    )
  }
}
