import React, { Component } from 'react'

import WithCopyRight from './WithCopyRight'

@WithCopyRight

class Another extends Component {
  render() {
    return (
      <div>
        Another{this.props.name}
      </div>
    )
  }
}

export default Another