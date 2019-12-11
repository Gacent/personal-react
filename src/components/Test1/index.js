import React, { Component } from 'react'

export default class Test1 extends Component {
  // 只执行一次
  constructor(props){
    super(props)
    this.state={
      counter:0,
      other:0,
      title:''
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    let counts=this.state.counter
    this.setState({
      counter:++counts
    })
  }
  // 
  static getDerivedStateFromProps(props,state){
    console.log('test1 getDerivedStateFromProps',props,state)
    return {
      title:props.title
    }
  }
  // 获取真实的DOM，执行异步请求获取数据
  componentDidMount(){
    console.log('test1 componentDidMount')
  }
  // 
  componentWillUnmount(){
    console.log('test1 componentWillUnmount')
  }
  // 用于性能优化，对比是否修改了，修改了才render，没修改不执行render
  // 一般借助第三方：lodash的isEqual方法比较（深度比较）
  shouldComponentUpdate(nextProps, nextState){
    console.log('test1 componentWillUnmount',nextProps,nextState)
    return true
  }
  render() {
    console.log('test1 render')
    return (
      <div>
        <p>{this.state.counter}</p>
        <p>{this.state.title}</p>
        <button onClick={this.handleClick}>change</button>
      </div>
    )
  }
}
