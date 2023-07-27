import React, { useCallback, useState } from 'react'
import CallBackChild from './CallBackChild'
import ButtonComp from './ButtonComp'

function UseCallBackComp() {
    const [number, setnumber] = useState(1)
    const [count, setcount] = useState(20)

    const changeNumber = useCallback(() => {
        setnumber(number+1)
      },[number])

    const changeCount = useCallback(() => {
        setcount(count+1)
      },[count])
    
    
  return (
    <>
        <h3>Count : {count}</h3>
        <h3>Number : {number}</h3>
        <div>UseCallBackComp</div>
        <ButtonComp changeValue={changeCount}>Count</ButtonComp>
        <ButtonComp changeValue={changeNumber}>Number</ButtonComp>
    </>
  )
}

export default UseCallBackComp