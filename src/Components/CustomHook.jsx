import React, { useState } from 'react'
import useCustom from './useCustom'

function CustomHook() {
  let arr = [
    {
      name : "ertdgdfg",
      age : 43,
      address : ""
    },
    {
      name : "ertdgdfg",
      age : 43,
      address : ""
    },
    {
      name : "ertdgdfg",
      age : 43,
      address : ""
    }
  ]
    const data = useCustom(arr)

    console.log(data)
  return (
    <>
      <div>CustomHook</div>
    </>
  )
}

export default CustomHook