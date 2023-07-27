import React, { Component } from 'react'

export class ClassCom3 extends Component {
    constructor(){
        super();

        this.state = {}

        console.log('constructor' , 11)
    }

    static getDerivedStateFromProps(props , state){
        console.log('getDerivedStateFromProps' , 12)
        console.log('props' , props , 13)
        console.log('state' , state ,14)
        return true
    }

    componentDidMount(){
        console.log('componentDidMount' , 17)
    }

  render() {
    console.log('render' ,15)
    return (
      <div>ClassCom3</div>
    )
  }
}

export default ClassCom3