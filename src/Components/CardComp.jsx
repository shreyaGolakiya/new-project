import React from 'react'
import image1 from '../logo.svg'

function CardComp(props) {
    console.log(props.obj)
  return (
    <>
        <div className='card'>
            <img src={props.obj.img} alt="" />
            <h3>{props.obj.title}</h3>
            <p>{props.obj.data}</p>
        </div>
    </>
  )
}

export default CardComp