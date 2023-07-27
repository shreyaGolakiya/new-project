import React, { Component } from 'react'

export class ChildComp extends Component {

    constructor(props){
        super(props);

        this.state = {
            
        }
        if(this.props.name === 'pqr'){
            throw new Error('Name same.')
        }
    }

  render() {
    return (
      <>
        <div>ChildComp</div>
       
      </>
    )
  }
}

export default ChildComp