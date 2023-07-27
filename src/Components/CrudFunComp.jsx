import React, { useRef, useState } from 'react'
import {BsFill1CircleFill} from 'react-icons/bs'

function CrudFunComp() {
    let [count, setcount] = useState(0)
    const fileRef = useRef()
    const [blankObj, setblankObj] = useState({})
    const [obj, setobj] = useState({hobbies : []})
    const [array, setarray] = useState([])
    const getData = async (e) => {
      if(e.target.name == 'hobbies'){
        if(e.target.checked){
          obj.hobbies.push(e.target.value)
        }else{
          // let index = obj.hobbies.findIndex(x => x == e.target.value)
          // obj.hobbies.splice(index , 1)
          obj.hobbies = obj.hobbies.filter(x => x != e.target.value)
        }
        blankObj.hobbies = [];
      }
      else if(e.target.name == 'profile'){
        console.log(e.target.files[0])

        obj.profile = await toBase64(e.target.files[0])
      }
      else{
        obj[e.target.name] = e.target.value;
        blankObj[e.target.name] = "";
      }
      setobj({...obj})
      setblankObj({...blankObj})
    }

    const Save = () => {
      if(obj.id == undefined){
        count = count+1;
        setcount(count)
        obj.id = count;
        array.push(obj)
      }else{
        let index = array.findIndex(x => x.id == obj.id)
        array.splice(index , 1, obj)
      }
      fileRef.current.value = "";
      setarray([...array])
      setobj({...blankObj})
    }


    const editUser = (id) => {
      let editObj = array.find(x => x.id == id)
      console.log(editObj)
      setobj({...editObj})
    }

    const deleteUser = (id) => {
      let index = array.findIndex(x => x.id == id);
      array.splice(index , 1)
      setarray([...array])
    }
  
    
    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  return (
    <>
        <form className='w-50 mx-auto p-4 border border-1 mt-5'>
            <h3>FORM</h3>
            <label htmlFor="" className='d-block'> First Name</label>
            <input type="text" className='w-100' name='fname' value={obj.fname} onChange={getData} />
            <label htmlFor="" className='d-block'> Last Name</label>
            <input type="text" className='w-100' name='lname' value={obj.lname} onChange={getData} />
            <label htmlFor="" className='d-block'> Email</label>
            <input type="email" className='w-100' name='email' value={obj.email} onChange={getData} />
            <label htmlFor="" className='d-block'> Gender</label>
            <input type="radio" value='Male' name='gender' checked={obj.gender == 'Male'} onChange={getData} />Male
            <input type="radio" value='Female' name='gender' checked={obj.gender == 'Female'} onChange={getData} />Female
            <br />
            <label htmlFor="" className='d-block'>Hobbies</label>
            <input type="checkbox" value='Drive' name='hobbies' checked={obj.hobbies.includes('Drive')} onChange={getData} />Drive
            <input type="checkbox" value='Singing' name='hobbies' checked={obj.hobbies.includes('Singing')}  onChange={getData} />Singing
            <input type="checkbox" value='Traveling' name='hobbies' checked={obj.hobbies.includes('Traveling')}  onChange={getData} />Traveling <br />
            <label htmlFor="" className='d-block'>Profile</label>
            <input type="file" name='profile' ref={fileRef}  onChange={getData} /> <br />
            <button type='button' className='btn btn-success mt-4' onClick={Save}>Save</button>
        </form>


        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Hobbies</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              array.map((x,i) => {
                return <tr key={i}>
                  <td>{x.id}</td>
                  <td><img src={x.profile} alt="" width={40} height={40} /></td>
                  <td>{x.fname}</td>
                  <td>{x.lname}</td>
                  <td>{x.email}</td>
                  <td>{x.gender}</td>
                  <td>{x.hobbies?.join(',')}</td>
                  <td>
                    <button className='btn btn-info' onClick={() => editUser(x.id)}>EDIT</button>
                    <button className='btn btn-danger ms-2' onClick={() => deleteUser(x.id)}>DELETE</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
        
    </>
  )
}

export default CrudFunComp