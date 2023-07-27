import React, { Component } from 'react'

class UnMountClassComp extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    componentWillUnmount(){
      console.log('componentWillUnmount')
    }
    
  render() {
    return (
      <div>UnMountClassComp</div>
    )
  }
}

export default UnMountClassComp