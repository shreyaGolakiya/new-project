import React, { Component } from 'react'

export class ClassComp2 extends Component {
    constructor(){
        super();

        this.state = {}

        console.log('constructor' , 6)
    }

    static getDerivedStateFromProps(props , state){
        console.log('getDerivedStateFromProps' , 7)
        console.log('props' , props , 8)
        console.log('state' , state ,9)
        return true
    }

    componentDidMount(){
        console.log('componentDidMount' , 16)
    }

  render() {
    console.log('render' ,10)
    return (
      <div>ClassComp2</div>
    )
  }
}

export default ClassComp2