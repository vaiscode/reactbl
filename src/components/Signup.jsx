import React, { useState, useNavigate } from 'react'
import { Button, TextField} from '@mui/material'
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [users,setUsers] = useState();
  const inputHandler = (e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
    console.log(users);
  };
  const addHandler = ()=>{
    console.log("clicked",users);
   axios.post("http://localhost:3005/api",users).then((res)=>{
        console.log(res);
        navigate('/');
   })
   .catch((err)=>{
    console.log(err);
   })
          
  }
  return (
    <div>
          <TextField fullWidth label="Name" name="name" onChange={inputHandler} required id="fullWidth" />
          <br/><br/>
          <TextField fullWidth label="Email" name="email" onChange={inputHandler} required id="fullWidth" />
          <br/><br/>
          <TextField fullWidth label="Username" name="username" onChange={inputHandler} required id="fullWidth" />
          <br/><br/>
          <TextField fullWidth label="Password" name="password" onChange={inputHandler} required id="fullWidth" />
          <br/><br/>
          <Button variant="contained" color='warning' onClick={addHandler}>Signup</Button>
        </div>
  )
}

export default Signup