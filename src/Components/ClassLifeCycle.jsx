import React, { Component } from 'react'

export class ClassLifeCycle extends Component {
    constructor(){
        super();

        this.state = {

        }

        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        console.log('props' , props)
        console.log('state' , state)

        return false
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
  render() {
    console.log('render')
    return (
      <div>ClassLifeCycle</div>
    )
  }
}

export default ClassLifeCycle