import React, { Component } from 'react'

export class PropsClass extends Component {
    constructor(props){
        super(props);

        console.log(this.props)
    }
  render() {
    return (
      <div>PropsClass</div>
    )
  }
}

export default PropsClass