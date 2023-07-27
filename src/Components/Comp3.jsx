import React, { useContext } from 'react'
import { NumberContext } from '../App'

function Comp3() {
    const value = useContext(NumberContext)
    console.log(value)
  return (
    <>
    <h2>{value.arr}</h2>
    <button onClick={() => value.setarr([237])}>Click</button>
        {/* <NumberContext.Consumer>
            {(value) => {
                return <h2>{value}</h2>
            }}
        </NumberContext.Consumer> */}
    </>
  )
}

export default Comp3