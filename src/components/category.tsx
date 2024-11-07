import React from 'react'
import Categorydata from '@/Data/catagoeydata';
function Category() {
  return (
    <div className=' flex flex-col justify-center items-center mt-60 mb-16'>
        <h1 className='text-3xl text-center font-bold mb-6'>Browse By Category</h1>
        
        <div className='grid overflow-hidden mb-9 mt-7 shadow-lg border rounded-3xl border-gray-200 lg:grid-cols-9 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1'>
        {Categorydata.map((brand) => (
    
              <div className=' hover:bg-gray-50 cursor-pointer border-r-2 border-gray-100 h-28 w-[9rem] flex flex-col justify-center items-center'>
                <img className='  w-10 h-auto' src={brand.icon} alt="" />
                <p className='text-lg font-medium'>{brand.name}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Category