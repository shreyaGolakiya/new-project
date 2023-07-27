import React, { useMemo, useState } from 'react'

function UseMemoExample() {

    const [counter, setcounter] = useState(1)

    // const memoFunction = () => {
    //     console.log('123345')
    //     return '500'
    // }

    const memoFunction = useMemo(() => {
        console.log('123345')
        return counter
    }, [counter])
  return (
    <>  
        <h4>Counter  : {counter}</h4>
        <h5>{memoFunction}</h5>
        <div>UseMemoExample</div>
        <button onClick={() => setcounter(counter+1)}>Click</button>
    </>
  )
}

export default UseMemoExample