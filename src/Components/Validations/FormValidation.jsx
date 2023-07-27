import React, { useRef, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

function FormValidation() {
  const [obj, setobj] = useState({ hobbies: [], fname: "", lname: "", email: "", password: "", confirmPassword: "", information: "", mobile: "", date: "", gender: "" })
  let [count, setcount] = useState(0)
  const [blankObj, setblankObj] = useState({})
  const [filterObj, setfilterObj] = useState({fname : "" , lname : "" , email : ""})
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
    if (name == 'fname') {
      if (!obj.fname || obj.fname == "") {
        isError.fname = "First name is required.";

      }
      else if (obj.fname && !letters.test(obj.fname)) {
        isError.fname = "First name contains only alphabets.";
      }
      else {
        delete isError.fname;
      }
    }


    if (name == 'lname') {
      if (!obj.lname || obj.lname == "") {
        isError.lname = "Last name is required.";
      }
      else if (obj.lname && !letters.test(obj.lname)) {
        isError.lname = "Last name contains only alphabets.";
      }
      else {
        delete isError.lname;
      }
    }
    if (name == 'email') {
      if (!obj.email || obj.email == "") {
        isError.email = "Email is required.";
      }
      else if (obj.email && ((!obj.email.includes('@gmail.com') && !obj.email.includes('@outlook.com')))) {
        isError.email = "@gmail or @outlook is required.";
      }
      else {
        delete isError.email;
      }
    }

    if (name == 'mobile') {
      if (!obj.mobile || obj.mobile == "") {
        isError.mobile = "Mobile no. is required.";
      }
      else if ((obj.mobile <= 0) || (obj.mobile.length != 10)) {
        isError.mobile = "Mobile no. is not valid.";
      }
      else {
        delete isError.mobile;
      }
    }

    if (name == 'gender') {
      if (!obj.gender || obj.gender == "") {
        isError.gender = "Gender is required.";
      }
      else {
        delete isError.gender;
      }
    }

    if (name == 'date') {
      if (!obj.date || obj.date == "") {
        isError.date = "Date is required.";
      }
      else if (!isDate18orMoreYearsOld(new Date(obj.date).getDate(), new Date(obj.date).getMonth(), new Date(obj.date).getFullYear())) {
        isError.date = "Date must be 18th+";
      }
      else {
        delete isError.date;
      }
    }
    if (name == 'hobbies') {
      if (!obj.hobbies || obj.hobbies == "") {
        isError.hobbies = "Hobbies is required.";
      }
      else if (obj.hobbies.length < 3) {
        isError.hobbies = "Please select any 3";
      }
      else {
        delete isError.hobbies;
      }
    }


    if (name == "information") {
      if (!obj.information || obj.information == "") {
        isError.information = "Information is required.";
      } else {
        delete isError.information;
      }
    }
    if (name == "password" || name == "confirmPassword") {
      if (obj.password == obj.confirmPassword) {
        delete isError.confirmPassword;
        delete isError.password;
      }
      if (!obj.password || obj.password == "") {
        isError.password = "Password is required.";
      }
      if (!obj.confirmPassword || obj.confirmPassword == "") {
        isError.confirmPassword = "Confirm Password is required.";
      }
      if ((obj.password != obj.confirmPassword) && (obj.confirmPassword != "")) {
        isError.confirmPassword = "Password and Confirm Password must be same.";
      }
    }
    setisError({ ...isError })
  }

  function isDate18orMoreYearsOld(day, month, year) {
    return new Date(year + 18, month, day) <= new Date();
  }

  const Save = () => {
    for (let key in obj) {
      validateData(key)
    }
    if (Object.keys(isError).length == 0) {
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

  const getfilterData = (e) => {
      filterObj[e.target.name] = e.target.value;
      setfilterObj({...filterObj})

      let  a = `x.fname.toLowerCase().includes(filterObj.fname.toLowerCase())`
      filterArray = array.filter(x => a && x.lname.toLowerCase().includes(filterObj.lname.toLowerCase()) && x.email.toLowerCase().includes(filterObj.email.toLowerCase()))
      setfilterArray([...filterArray])
      console.log(filterArray)
  }
  return (
    <>
      <form action="" className='m-3'>
        <div className='row'>
          <div className='col-3'>
            <input type="text" className='w-100 p-2' placeholder='First Name' name='fname' onChange={getfilterData} />
          </div>
          <div className="col-3">
            <input type="text" className='w-100 p-2' placeholder='Last Name' name='lname' onChange={getfilterData}  />
          </div>
          <div className="col-3">
            <input type="email" className='w-100 p-2' placeholder='Email Address' name='email' onChange={getfilterData}  />
          </div>
        </div>
      </form>
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

export default FormValidation