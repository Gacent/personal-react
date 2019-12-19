import React, { Component } from 'react'
import { CounterConsumer } from '../../counterStore'
export default class CounterBtn extends Component{
  render(){
    return (
      <CounterConsumer>
        {
          ({increase,decrease})=>{
            let handle=this.props.type==='increase'?increase:decrease
            return <button onClick={handle}>{this.props.children}</button>
          }
        }
      </CounterConsumer>
    )
  }
}
