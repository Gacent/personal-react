import React, { Component } from 'react'

const WithCopyRight=(YourComponent)=>{
  return class WithCopyRight extends Component {
    render() {
      return (
        <div>
          <YourComponent {...this.props}/>
          这是高阶组件的内容
        </div>
      )
    }
  }
}

export default WithCopyRight