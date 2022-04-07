import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const newUser={
    name:'',
    gender:'',
    email:'',
    status:''

}   

function NewUser() {

    const setURL='https://gorest.co.in/public/v1/users'
    const token='020be1e2b7507bced43b81fb70cba48ea524c4638ecca19035f82d2eecfcf5b5'

    const [user, setUser] = useState(newUser)

    //taking value from input field and spread it to user state
    const valueChange=(e)=>{
            setUser({...user,[e.target.name] : e.target.value})
            console.log(user)
    }
    //Adding new user
    const addUser=async()=>{
       try{
           console.log(user)
           await axios.post(setURL,user,{headers:{'Accept': 'application/json', 'Content-Type': 'application/json','Authorization': `Bearer ${token}`}})
       }catch(error){
           console.log(error)
       }
    }


  return (
   <Box>
       <TextField onChange={(e)=>valueChange(e)} name='name' label='Enter User Name'/><br/><br/>
       <TextField onChange={(e)=>valueChange(e)} name='gender' label='Gender'/><br/><br/>
       <TextField onChange={(e)=>valueChange(e)} name='email' label='Enter Email'/><br/><br/>
       <TextField onChange={(e)=>valueChange(e)} name='status' label='Enter Status'/><br/><br/>
       <Button variant="contained" onClick={addUser}>Click to Add New User</Button>
   </Box>
  )
}

export default NewUser