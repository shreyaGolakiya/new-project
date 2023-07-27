import React, { Component } from 'react'
import { HOC } from '../Components/HOC'

class About extends Component {
    constructor(props){
        super(props);

        console.log(this.props.h2Ref)
    }

    componentDidMount(){
        console.log(this.props.h2Ref)
    }
  render() {
    return (
      <div ref={this.props.h2Ref}>About</div>
    )
  }
}

export default HOC(About)