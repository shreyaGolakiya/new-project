import React, { useEffect, useRef } from 'react'

function UseRefComp() {
    const nameRef = useRef()

    // useEffect(() => {
    //     nameRef.current.style.color = 'red's
    // }, [])
    
    setTimeout(() => {
      console.log(nameRef)
    }, 1000);
  return (
    <>
        <h2 ref={nameRef}>UseRefComp</h2>
    </>
  )
}

export default UseRefComp