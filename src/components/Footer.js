import React, { useContext } from 'react'
import UserContext from '../utils/userContext'

export default function Footer() {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  )
}
