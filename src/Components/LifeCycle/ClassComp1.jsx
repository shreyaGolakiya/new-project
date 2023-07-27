import React, { Component } from 'react'
import ClassComp2 from './ClassComp2';
import ClassCom3 from './ClassCom3';

export class ClassComp1 extends Component {
    constructor(){
        super();

        this.state = {

        }

        console.log('constructor' , 1)
    }

    static getDerivedStateFromProps(props , state){
        console.log('getDerivedStateFromProps' , 2)
        console.log('props' , props , 3)
        console.log('state' , state , 4)
        return true
    }

    componentDidMount(){
        console.log('componentDidMount' , 18)
    }
  render() {
    console.log('render' , 5)
    return (
        <>
            <div>ClassComp1</div>
            <ClassComp2 />
            <ClassCom3 />
        </>
    )
  }
}

export default ClassComp1