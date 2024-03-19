import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
   <>
    <h1 className='bg-green-300 py-5 text-green-950 text-center text-xl font-medium'>User: {userId}</h1>
   </>
  )
}

export default User