import React, { useState } from 'react'

function StateManage() {
    let [count, setcount] = useState(0)
debugger
    setInterval(() => {
        count += 1;
        console.log(count)
        setcount(count)
        debugger
    }, 1000);
  return (
    <>
        <h2>Count : {count}</h2>
    </>
  )
}

export default StateManage