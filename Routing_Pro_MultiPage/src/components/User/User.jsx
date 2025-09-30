import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  // it get direct value from url that is dynamic and show it
    const {userid} = useParams()
  return (
    // it show userid that is dynamic value from url
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User