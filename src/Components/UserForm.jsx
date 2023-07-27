import { useState } from "react";

export const count = 20;
const UserForm = () => {

    let [count ,  setCount] = useState([])
    const [array, setarray] = useState([5675678])
    // let number = 21;

    // setInterval(() => {
    //     number = number+1;
    //     // console.log(number)
    // }, 1000);

    // setTimeout(() => {
    //     setCount(34)
    //     // count = count+1;
    //     // console.log(count)
    // }, 1000);

    setTimeout(() => {
        array.push(56)
        
        setarray([...array])
        console.log(array)
    }, 1000);

    // console.log(number)
    return (
        <>
        {/* {console.log(count)}
        <h2>{count}</h2> */}
        <h5>Array : {array}</h5>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" />
                <input type="submit" />
            </form>
        </>
    )
}

export default UserForm