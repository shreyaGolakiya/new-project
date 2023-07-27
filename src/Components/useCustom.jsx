import React, { useState } from 'react'

function useCustom(value) {

  // const [first, setfirst] = useState(value)
  // const ChangeValue = (number) => {
  //     setfirst(number)
  // }
  // console.log(first)

  return value.map((x,i) => {
    return {name : x.name , age : x.age}
  })
}


export default useCustom