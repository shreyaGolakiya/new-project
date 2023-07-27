import React, { Component, PureComponent } from 'react'

export class PureComp extends PureComponent {
    constructor(){
        super();

        this.state = {
            count : 1,
            number : 2
        }
    }

  render() {
    console.log('render')
    return (
      <>   
        <h4>Count : {this.state.count}</h4>
        <div>PureComp</div>
        <button onClick={() => this.setState({count : 2})}>Click</button>
        <button onClick={() => this.setState({number : this.state.number+1})}>Number Click</button>
      </>
    )
  }
}

export default PureComp