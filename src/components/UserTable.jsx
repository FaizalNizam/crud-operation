import axios from 'axios'
import React, { useState } from 'react'
import DialogBox from './DialogBox'

const URL = `https://gorest.co.in/public/v1/users`
const token = '020be1e2b7507bced43b81fb70cba48ea524c4638ecca19035f82d2eecfcf5b5'

const authAxios = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

function UserTable(props) {

  const [open, setOpen] = useState(false)
  const [id, setID] = useState(0)

  const handleClickOpen = (userid) => {
    setOpen(true)
    setID(userid)
  }

  //for handling deletion
  const handleDelete = async (deleteId) => {
    try {
      await authAxios.delete(`${URL}/${deleteId}`)
      alert("user deleted scucessfully")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <table style={{ width: '100%', border: '1px solid black', paddingTop: 10 }}>
        <tr>
          <td style={{ border: '1px solid black', textAlign: 'center', width: '10%' }}>{props.user.id}</td>
          <td style={{ border: '1px solid black', textAlign: 'center', width: '20%' }}>{props.user.name}</td>
          <td style={{ border: '1px solid black', textAlign: 'center', width: '10%' }}>{props.user.gender}</td>
          <td style={{ border: '1px solid black', textAlign: 'center', width: '30%' }}>{props.user.email}</td>
          <td style={{ border: '1px solid black', textAlign: 'center', width: '10%' }}>{props.user.status}</td>
          <td style={{ border: '1px solid black', textAlign: 'center', width: '10%' }}><button onClick={() => handleClickOpen(props.user.id)}>Edit User</button></td>
          <td style={{ border: '1px solid black', textAlign: 'center', width: '30%' }}><button onClick={() => handleDelete(props.user.id)}>Delete User</button></td>
        </tr>
      </table>

      <DialogBox open={open} setOpen={setOpen} id={id} />
    </div>
  )
}

export default UserTable