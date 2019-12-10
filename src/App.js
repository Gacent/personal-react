import React ,{Component,Fragment}from 'react';
import {
  Test1,
  Test2
} from './components'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Test1></Test1>
        <Test2></Test2>
      </Fragment>
    )
  }
}
