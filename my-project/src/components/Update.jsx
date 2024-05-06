import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {updateuser} from '../redux/UserSlice';
import {useNavigate} from 'react-router-dom'

export const Update = () => {

  const{id}=useParams();
  const users=useSelector((state)=> state.users);
  const existngUser=users.filter(f=>f.id == id);
  const {name,email}=existngUser[0];
  const [uname,setname]=useState(name);
  const [uemail,setemail]=useState(email);
  const usedispatch=useDispatch();
  const usenavigate=useNavigate();

  const handleupdate=(event)=>{
    event.preventDefault();
    usedispatch(updateuser({
      id:id,
      name:uname,
      email:uemail
    }))
    usenavigate('/');
  }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'> 
        <div className='w-50 border bg-secondary text-white p-5'>
          <h3>Update User</h3>
          <form onSubmit={handleupdate}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type='text' name='name' className='form-control' placeholder='Enter the Name'
              value={uname} onChange={e=>setname(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="name">Email:</label>
              <input type='email' name='email' className='form-control' placeholder='Enter the Email'
              value={uemail} onChange={e=>setemail(e.target.value)}/>
            </div>
            <br/>
            <button className='btn btn-info'> Update</button>
          </form>
        </div>
      </div>
  )
}

export default Update;