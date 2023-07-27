import React from 'react'
import logo from '../logo.svg'

function PropsCom(props) {
    console.log(props)
  return (
    <>
        <div className='card'>
            <img src={logo} alt="" />
            <h4>{props.name}</h4>
            <p>{props.data}</p>
        </div>
    </>
  )
}

export default PropsCom