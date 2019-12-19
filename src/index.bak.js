import React,{createContext,Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

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

class Counter extends Component{
  render(){
    return (
      // 接收值
      // 注意！注意！注意！注意！
      // Consumer的children必须是一个方法，方法有个参数，这个参数就是Provider的value
      <CounterConsumer>
        {
          ({count})=>{
            return <span>{count}</span>
          }
        }
      </CounterConsumer>
    )
  }
}

class CounterBtn extends Component{
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

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <CounterBtn type="decrease">-</CounterBtn>
        <Counter>10</Counter>
        <CounterBtn type="increase">+</CounterBtn>
      </React.Fragment>
    )
  }
}


ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>, 
  document.getElementById('root'));