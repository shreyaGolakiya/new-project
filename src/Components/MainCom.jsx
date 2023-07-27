import React, { useState } from 'react'
import ChildComp from './ChildComp'

function MainCom() {
    const [num, setnum] = useState(0)
    const getData = (value) => {
        setnum(value)
    }
  return (
    <>
        <ChildComp num={num} getData={getData} />
    </>
  )
}

export default MainCom