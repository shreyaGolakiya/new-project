import React from 'react'

function ChildComp(props) {
    return (
        <>

            <h2>{props.num}</h2>
            <div>ChildComp</div>
            <button onClick={() => props.getData(345346)}>Click</button>
        </>
    )
}

export default ChildComp