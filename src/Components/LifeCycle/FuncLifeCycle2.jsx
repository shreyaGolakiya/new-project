import React, { useEffect } from 'react'

function FuncLifeCycle2() {
    useEffect(() => {
        console.log('useEffect2')
    }, [])
    
    console.log('FuncLifeCycle2')
  return (
    <>
        {console.log('render2')}
        <div>FuncLifeCycle2</div>
    </>
  )
}

export default FuncLifeCycle2