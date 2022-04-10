import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserTable from './UserTable'
import NewUser from './NewUser'
import InfiniteScroll from 'react-infinite-scroll-component'

function Home() {

  const getURL = 'https://gorest.co.in/public/v1/users?'

  const [userData, setUserData] = useState([])
  //state for pagination
  const [page, setPage] = useState(0)

  //for fetching user data and list the user in tabular form
  useEffect(() => {
    usersdata(page)
  }, [page])

  const usersdata = async (page) => {
    let response = await axios.get(`${getURL}page=${page}`)//pagination works on infinite scroll basis when page value changes
    setUserData([...userData, ...response.data.data])//reponse data is spreaded to avoid overlaping of userData
    console.log(userData)
  }

  return (
    <div>
      <div style={{ width: '75%', float: 'left' }}>
        <table style={{ width: '100%', border: '1px solid black' }}>
          <tr>
            <th style={{ border: '1px solid black', width: '10%' }}>User Id</th>
            <th style={{ border: '1px solid black', width: '20%' }}>User Name</th>
            <th style={{ border: '1px solid black', width: '10%' }}>Gender</th>
            <th style={{ border: '1px solid black', width: '30%' }}>Email</th>
            <th style={{ border: '1px solid black', width: '10%' }}>Status</th>
            <th style={{ border: '1px solid black', width: '10%' }}>Edit User</th>
            <th style={{ border: '1px solid black', width: '30%' }}>Delete User</th>
          </tr>
        </table>

        <InfiniteScroll
          dataLength={userData.length}
          next={() => setPage(page => page + 1)}
          hasMore={true}
        >
          {
            userData.map((user) => (
              <UserTable user={user} key={user.id} />

            ))
          }
        </InfiniteScroll>
      </div>

      <div style={{ paddingLeft: 70, marginTop: 20, float: 'left' }}>
        <h1 >Create New User</h1>
        <NewUser />
        <br />
      </div>

    </div>
  )
}

export default Home