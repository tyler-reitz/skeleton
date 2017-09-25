import React, { Component } from 'react'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      prop: 'value'
    }
  }

  render() {
    return <div>
        <h1>Hello</h1>
      </div>
  }
}

export default Main