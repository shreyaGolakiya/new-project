import React, { memo } from 'react'

function ButtonComp(props) {
    console.log('ButtonComp' , props.children)
  return (
    <>
        <button className='btn btn-dark ms-2' onClick={props.changeValue}>{props.children}</button>
    </>
  )
}

export default memo(ButtonComp)