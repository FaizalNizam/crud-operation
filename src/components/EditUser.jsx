import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const newUser={
    username:'',
    gender:'',
    email:'',
    status:''

}   

function EditUser(userid) {

    const setURL=' https://gorest.co.in/public/v1/users/'
    const token='020be1e2b7507bced43b81fb70cba48ea524c4638ecca19035f82d2eecfcf5b5'
    console.log(userid)

    const [user, setUser] = useState(newUser)


    const valueChange=(e)=>{
            setUser({...user,[e.target.name] : e.target.value})
            console.log(user)
    }
    //editing existing user
    const editUser=async()=>{
       try{
           console.log(user)
           await axios.put(`${setURL}/${userid}`,user,{headers:{'Accept': 'application/json', 'Content-Type': 'application/json','Authorization': `Bearer ${token}`}})
       }catch(error){
           console.log(error)
       }
    }


  return (
   <Box>
       <TextField onChange={(e)=>valueChange(e)} name='username' label='Enter User Name'/><br/><br/>
       <TextField onChange={(e)=>valueChange(e)} name='gender' label='Gender'/><br/><br/>
       <TextField onChange={(e)=>valueChange(e)} name='email' label='Enter Email'/><br/><br/>
       <TextField onChange={(e)=>valueChange(e)} name='status' label='Enter Status'/><br/><br/>
       <Button variant="contained" onClick={editUser}>Click to Edit User</Button>
   </Box>
  )
}

export default EditUser