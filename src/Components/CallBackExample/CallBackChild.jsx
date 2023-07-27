import React, { memo } from 'react'

function CallBackChild(props) {
    console.log('CallBackChild')
    console.log(props)
  return (
    <>
        <div>CallBackChild</div>
    </>
  )
}

export default memo(CallBackChild)