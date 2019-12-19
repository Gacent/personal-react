import React,{createContext,Component}from 'react';

// 解析createContext
// Provider：供应者
// Consumer：消费者
const {
  Provider,
  Consumer:CounterConsumer // Consumer重新命名成CounterConsumer
}=createContext()

// 封装Provider，因为直接使用不方便管理状态
class CounterProvider extends Component {
  constructor(props){
    super(props)
    // 共享的状态
    this.state={
      count:100
    }
    // 共享的方法
    this.increase=this.increase.bind(this)
    this.decrease=this.decrease.bind(this)
  }
  increase(){
    let counts=this.state.count
    this.setState({
      count:++counts
    })
  }
  decrease(){
    let counts=this.state.count
    this.setState({
      count:--counts
    })
  }
  render(){
    return (
      // value可以传递任何的数据，一般传递对象比较合理
      <Provider value={
        {
          count:this.state.count,
          increase:this.increase,
          decrease:this.decrease
        }
      }>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  CounterProvider,
  CounterConsumer
}