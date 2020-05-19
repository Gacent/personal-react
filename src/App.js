import React, { Component } from 'react'

import Another from './Another'
const App = class App extends Component {
  render() {
    return (
      <div>
        <Another name="我是name"></Another>
      </div>
    )
  }
}

export default App