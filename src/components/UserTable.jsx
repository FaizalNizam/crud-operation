import React from 'react'
import EditUser from './EditUser'

function UserTable(props) {
   
    const editUser=()=>{
         EditUser(props.user.id)
    }

  return (
    <div>
        <table style={{width:'100%',border:'1px solid black',paddingTop:10}}>
            <tr>
                <td style={{border:'1px solid black',textAlign:'center',width:'10%'}}>{props.user.id}</td>
                <td style={{border:'1px solid black',textAlign:'center',width:'20%'}}>{props.user.name}</td>
                <td style={{border:'1px solid black',textAlign:'center',width:'10%'}}>{props.user.gender}</td>
                <td style={{border:'1px solid black',textAlign:'center',width:'30%'}}>{props.user.email}</td>
                <td style={{border:'1px solid black',textAlign:'center',width:'10%'}}>{props.user.status}</td>
                <td style={{border:'1px solid black',textAlign:'center',width:'10%'}}><button onClick={editUser}>Edit User</button></td>
                <td style={{border:'1px solid black',textAlign:'center',width:'30%'}}><button>Delete User</button></td>

            </tr>
        </table>
    </div>
  )
}

export default UserTable