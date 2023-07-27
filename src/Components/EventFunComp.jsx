import React, { useState } from 'react'

function EventFunComp() {
    const [number, setnumber] = useState(10)

    const [fname, setfname] = useState('')

    const changeData = (e) => {
        console.log(e.target)
    }

  return (
    <>
        <h4>Name : {fname}</h4>
        <input type="text" name='fname' onChange={(e) => changeData(e)} />
        {/* <input type="text" name='fname' onChange={(e) => setfname(e.target.value)} /> */}
        <input type="text" name='lname' onChange={(e) => changeData(e)} />
    </>
  )
}

export default EventFunComp