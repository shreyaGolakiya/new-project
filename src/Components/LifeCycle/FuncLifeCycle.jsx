import React, { useEffect, useState } from 'react'
import FuncLifeCycle2 from './FuncLifeCycle2'

function FuncLifeCycle() {

    const [state, setstate] = useState(12)
    const [count, setcount] = useState(45)
    useEffect(() => {
        console.log('useEffect')
    }, [])

    useEffect(() => {
        return () => {
            console.log('Component unmount')
        }
    }, [])

    useEffect(() => {
        console.log('state update')
        return () => {
            console.log('Component unmount-2')
        }
    }, [state])
    
    console.log('FuncLifeCycle')
  return (
    <>
        {console.log('render')}
        <div>FuncLifeCycle</div>
        {/* <button onClick={() => setstate(13)}>Click</button>
        <button onClick={() => setcount(count+1)}>Count Change</button> */}
    </>
  )
}

export default FuncLifeCycle