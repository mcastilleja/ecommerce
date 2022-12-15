import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const MyPage = () => {
  const { user, userData } = useContext(AuthContext)
  return (
    <>
      <div className='userData'>
        <span>{user.role === 'CUSTOMER' ? 'Customer' : 'Admin'}</span>
        <h1>Welcome {userData.first_name}</h1>
        <h3>Your personal info:</h3>
        <h5>Full Name: {userData.first_name} {userData.last_name}</h5>
        <h5>Gender: {userData.gender === 'F' ? 'Female' : 'Male'} </h5>
        <h5>Email: {userData.email}</h5>
      </div>
    </>
  )
}

export default MyPage
