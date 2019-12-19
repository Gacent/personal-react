import React ,{Component,Fragment}from 'react';
import {
  CounterBtn,
  Counter
} from './components'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <CounterBtn type="decrease">-</CounterBtn>
        <Counter>10</Counter>
        <CounterBtn type="increase">+</CounterBtn>
      </Fragment>
    )
  }
}
