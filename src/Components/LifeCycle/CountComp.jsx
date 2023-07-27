import React, { Component } from 'react'

export class CountComp extends Component {
    constructor(){
        super();

        this.state = {
            count : 0
        }
    }

    changeData = () =>{
        this.state.count = this.state.count+1;
        this.setState({count : this.state.count})
        if(this.state.count == 3){
            throw new Error('Count 3')
        }
    }
  render() {
    return (
      <>
        <div>CountComp</div>
        <h4>Count : {this.state.count}</h4>
        <button onClick={this.changeData}>Click</button>
      </>
    )
  }
}

export default CountComp