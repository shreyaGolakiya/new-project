import React, { Component } from 'react'

export class ErrorHandleComp extends Component {
    constructor(props){
        super(props);

        this.state = {
            error : false,
            errorInfo : false
        }

    }

    static getDerivedStateFromError(err){
        console.log(err)
        return {
            error : true
        }
    }

    componentDidCatch(err , errInfo){
        console.log(err , errInfo)
        this.setState({error : err , errorInfo : errInfo})
    }

  render() {
    if(this.state.error){
        return <>
            <details>{this.state.error &&  this.state.error.toString()}</details>
            <p>{this.state.error &&  this.state.errorInfo.componentStack}</p>
        </>
    }
    return this.props.children
  }
}

export default ErrorHandleComp