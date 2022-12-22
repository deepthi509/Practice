import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {userDetails} from './UserDataSlice'

export const UserView = () => {
  const user = useSelector(state => state.userData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userDetails())
  }, [])
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading &&  
      user.users ? (
        <ul>
         { console.log(user.users)}
          {user.users.map(user => (
            
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}