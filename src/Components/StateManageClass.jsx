import React, { Component } from 'react'

class StateManageClass extends Component {
    constructor(){
        super();

        this.state = {
            number : 0
        }
        // setInterval(() => {
        //     this.state.number += 1
        //     this.setState({number : this.state.number})
        //         console.log(this.state.number)
        // }, 1000);
    }
  render() {
    return (
      <>
            <h3>Number : {this.state.number}</h3>
      </>
    )
  }
}

export default StateManageClass