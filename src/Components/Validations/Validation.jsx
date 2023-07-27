import React, { useRef, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import validationData from '../../JSON/validationData.json'

function Validation() {
    const [obj, setobj] = useState({ hobbies: [], fname: "", lname: "", email: "", password: "", confirmPassword: "", information: "", mobile: "", date: "", gender: "" })
    let [count, setcount] = useState(0)
    const [blankObj, setblankObj] = useState({})
    const [filterObj, setfilterObj] = useState({ fname: "", lname: "", email: "" })
    let [filterArray, setfilterArray] = useState([])
    const [array, setarray] = useState([])
    let [isError, setisError] = useState({})
    const [formHeight, setformHeight] = useState(false)
    const firstName = useRef()
    let letters = /^[A-Za-z\s]*$/;

    const getData = async (e) => {
        if (e.target.name == 'hobbies') {
            if (e.target.checked) {
                obj.hobbies.push(e.target.value)
            } else {
                // let index = obj.hobbies.findIndex(x => x == e.target.value)
                // obj.hobbies.splice(index , 1)
                obj.hobbies = obj.hobbies.filter(x => x != e.target.value)
            }
            blankObj.hobbies = [];
        }
        else if (e.target.name == 'information') {
            obj[e.target.name] = e.target.value.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
            blankObj[e.target.name] = ""
        }
        else {
            obj[e.target.name] = e.target.value;
            blankObj[e.target.name] = "";
        }
        setobj({ ...obj })
        setblankObj({ ...blankObj })
        validateData(e.target.name);
    }

    const validateData = (name) => {
        let validationObj = validationData.find(x => x.name == name)
        if(validationObj){
            let errorObj = validationObj.conditions.find(x => eval(x.condition))
            if(errorObj){
                if(errorObj.otherField){
                    isError[errorObj.otherField] = errorObj.error;
                }else{
                    isError[name] = errorObj.error;
                }
            }else{
                delete isError[name];
            }
        }
        setisError({ ...isError })
    }

    function isDate18orMoreYearsOld(day, month, year) {
        return new Date(year + 18, month, day) <= new Date();
      }

      const validatePassword = () => {
        if ((obj.password !== obj.confirmPassword) && (obj.confirmPassword != "")) {
           isError.confirmPassword = "Password and Confirm Password must be same.";
        }
        if ((obj.password === obj.confirmPassword) && (obj.confirmPassword != "")) {
            delete isError.confirmPassword;
        }
        setisError({ ...isError })
        return false
      }

    const Save = () => {
        for(let key in obj){
            validateData(key)
        }
        if(Object.keys(isError).length == 0){
            if (obj.id == undefined) {
                count = count + 1;
                setcount(count)
                obj.id = count;
                array.push(obj)
            } else {
                let index = array.findIndex(x => x.id == obj.id)
                array.splice(index, 1, obj)
            }
            setarray([...array])
            filterArray = array;
            setfilterArray([...filterArray])
            setobj({ ...blankObj })
        }
    }

    const openForm = () => {
        setformHeight(true)
    }
    const closeForm = () => {
        setformHeight(false)
    }
    return (
        <>
            <form className='w-50 mx-auto p-4 border border-1 mt-5 form_custom' style={{ height: formHeight ? 'auto' : '70px' }}>
                <div className='d-flex justify-content-between'>
                    <h3>FORM</h3>
                    <div>
                        {
                            formHeight ?
                                <AiOutlineArrowUp style={{ cursor: 'pointer' }} onClick={closeForm} /> :
                                <AiOutlineArrowDown style={{ cursor: 'pointer' }} onClick={openForm} />
                        }
                    </div>
                </div>
                <label htmlFor="" className='d-block'> First Name</label>
                <input type="text" className='w-100' name='fname' ref={firstName} value={obj.fname || ''} onChange={getData} />
                <span className='error_msg'>{isError?.fname}</span>

                <label htmlFor="" className='d-block'> Last Name</label>
                <input type="text" className='w-100' name='lname' ref={firstName} value={obj.lname || ''} onChange={getData} />
                <span className='error_msg'>{isError?.lname}</span>

                <label htmlFor="" className='d-block'> Email</label>
                <input type="email" className='w-100' name='email' value={obj.email || ''} onChange={getData} />
                <span className='error_msg'>{isError?.email}</span>

                <label htmlFor="" className='d-block'>Mobile</label>
                <input type="number" className='w-100' name='mobile' value={obj.mobile || ''} onChange={getData} />
                <span className='error_msg'>{isError?.mobile}</span>

                <label htmlFor="" className='d-block'>Birth Date</label>
                <input type="date" className='w-100' name='date' value={obj.date || ''} onChange={getData} />
                <span className='error_msg'>{isError?.date}</span>

                <label htmlFor="" className='d-block'>Password</label>
                <input type="password" className='w-100' name='password' value={obj.password || ''} onChange={getData} />
                <span className='error_msg'>{isError?.password}</span>

                <label htmlFor="" className='d-block'>Confirm Password</label>
                <input type="password" className='w-100' name='confirmPassword' value={obj.confirmPassword || ''} onChange={getData} />
                <span className='error_msg'>{isError?.confirmPassword}</span>

                <label htmlFor="" className='d-block'> Gender</label>
                <input type="radio" value='Male' name='gender' checked={obj.gender == 'Male'} onChange={getData} />Male
                <input type="radio" value='Female' name='gender' checked={obj.gender == 'Female'} onChange={getData} />Female
                <br />
                <span className='error_msg'>{isError?.gender}</span>

                <label htmlFor="" className='d-block'>Hobbies</label>
                <input type="checkbox" value='Drive' className='me-1' name='hobbies' checked={obj.hobbies?.includes('Drive')} onChange={getData} />Drive
                <input type="checkbox" value='Singing' className='me-1 ms-2' name='hobbies' checked={obj.hobbies?.includes('Singing')} onChange={getData} />Singing
                <input type="checkbox" value='Reading' className='me-1 ms-2' name='hobbies' checked={obj.hobbies?.includes('Reading')} onChange={getData} />Reading
                <input type="checkbox" value='Writing' className='me-1 ms-2' name='hobbies' checked={obj.hobbies?.includes('Writing')} onChange={getData} />Writing
                <input type="checkbox" value='Traveling' name='hobbies' className='me-1 ms-2' checked={obj.hobbies?.includes('Traveling')} onChange={getData} />Traveling <br />
                <span className='error_msg'>{isError?.hobbies}</span>

                <label htmlFor="" className='d-block'>Information</label>
                <textarea name="information" className='w-100' cols="30" rows="2" value={obj.information} onChange={getData}></textarea>
                <span className='error_msg'>{isError?.information}</span>

                <button type='button' className='btn btn-success mt-4' onClick={Save}>Save</button>
            </form>


            <table className='table mt-5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>Birth Date</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterArray.map((x, i) => {
                            return <tr key={i}>
                                <td>{x.id}</td>
                                <td>{x.fname}</td>
                                <td>{x.lname}</td>
                                <td>{x.email}</td>
                                <td>{x.mobile}</td>
                                <td>{x.date}</td>
                                <td>{x.gender}</td>
                                <td>{x.hobbies?.join(',')}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Validation