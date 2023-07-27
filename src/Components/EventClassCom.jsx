import React, { Component } from 'react'
class EventClassCom extends Component {
    constructor(){
        super();
        this.state = {
            fname : ''
        }
        // this.changeInputData = this.changeInputData.bind(this)
    }

    changeInputData = (e) => {
        this.setState({fname : e.target.value})
    }
  render() {
    return (
      <>
        <h4>Fname : {this.state.fname}</h4>
        <input type="text" onChange={this.changeInputData} />
      </>
    )
  }
}

export default EventClassCom