import React from 'react'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
function Profile() {
  return (
    <>
     < Navbar />

     <div className='flex justify-between w-[90%] ml-[5%] mr-[5%] h-[120px] items-center'>
        <h1 className='text-3xl font-bold'>My Listing</h1>
        <Link to={'/add-listing'}><Button>+ Add Car Listing</Button></Link>
     </div>
    </>
  )
}

export default Profile