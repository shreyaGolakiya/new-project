import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { NumberContext } from '../App'

function Comp2() {
    const value = useContext(NumberContext)
    console.log(value)
  return (
    <>
        {value.arr}
        <div>Comp2</div>
        <Comp3 />
    </>
  )
}

export default Comp2