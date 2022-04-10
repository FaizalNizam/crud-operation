import React, { useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import axios from 'axios';


const userData = {
    username: '',
    gender: '',
    email: '',
    status: ''
}

const URL = `https://gorest.co.in/public/v1/users`
const token = '020be1e2b7507bced43b81fb70cba48ea524c4638ecca19035f82d2eecfcf5b5'

const authAxios = axios.create({
    baseURL: URL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})


function DialogBox({ open, setOpen, id }) {

    const [editUser, setEditUser] = useState(userData)

    const handleClose = () => {
        setOpen(false)
    }

    const setChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value })
    }
    const json = JSON.stringify(editUser)

    const submitChange = async () => {
        try {
            await authAxios.put(`${URL}/${id}`,json)
            alert('user updated successfully ')
            handleClose()
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                <Typography>Edit User Details</Typography><br />
                <TextField onChange={(e) => setChange(e)} name='username' label='Enter user name' /><br />
                <TextField onChange={(e) => setChange(e)} name='gender' label='Enter gender' /><br />
                <TextField onChange={(e) => setChange(e)} name='email' label='Enter email' /><br />
                <TextField onChange={(e) => setChange(e)} name='status' label='Enter status' /><br />
                <Button onClick={submitChange} variant="contained">SUBMIT</Button>
            </DialogTitle>
        </Dialog>
    )
}

export default DialogBox