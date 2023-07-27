import React, { Component } from 'react'

export class ClassCompUpdate extends Component {
    constructor(){
        super();

        this.state = {
            state : 10
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props , state){
        console.log('getDerivedStateFromProps')
        console.log('props', props)
        console.log('state', state)
        return true
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')

        return true
    }

    getSnapshotBeforeUpdate(preProps, preState){
        console.log('getSnapshotBeforeUpdate')
        console.log('preProps', preProps)
        console.log('preState', preState)

        return 'sdfsdf'
    }

    componentDidUpdate(preProps, preState, snapShot){
        console.log('componentDidUpdate')
        console.log('preProps', preProps)
        console.log('preState', preState)
        console.log('snapShot', snapShot)
    }
  render() {
    console.log('render')
    return (
      <>
        <h4>State : {this.state.state}</h4>
        <div>ClassCompUpdate</div>
        <button onClick={() => this.setState({state : this.state.state+1})}>Click</button>
      </>
    )
  }
}

export default ClassCompUpdate