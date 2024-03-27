import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user,setUser] = useState();
  const inputHandler = (e)=>{
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  };
  const addHandler = ()=>{
    console.log(user);
    axios.post("http://localhost:3005/api/login",user).then((res)=>{
      alert(res.data.message)
      console.log(res);

    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
      <div >
         <Box style={{textAlign:'center', marginTop:10}}>
      <Typography variant='h5' >Blog App Login</Typography>
      <br/>
       <TextField fullWidth name="username" onChange={inputHandler} label='Username'/> 
       <br/>
       <br/>
       <TextField fullWidth name="password" onChange={inputHandler} label='Password'/>
       <br/>
       <br/>
       <Button variant='contained' onClick={addHandler}>Login</Button>
       <br/>
       <br/>
       <Typography variant='h6' ><Link to={'/signup'} style={{textDecoration:'none',color:'black'}}>New user? Signup here</Link></Typography>
       </Box>
      </div>
)};

export default Login