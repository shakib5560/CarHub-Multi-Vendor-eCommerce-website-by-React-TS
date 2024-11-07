import Search from './search'
import Bannercur from '../assets/bannercur.png'

function Hero() {
  return (
    <div className='w-full z-40 h-[600px] items-center bg-[#eef0fc] flex flex-col gap-6 p-10 py-20'>
      <h2 className='text-lg font-semibold'>Find Cars For Sale & For Rent <span className='text-primary'>Near You</span></h2>
      <h2 className='text-[60px] font-bold'>Find Your <span className='text-primary'> Dream Car</span></h2>

      {/* Search */}
      <Search />
      
      <img className='w-[70%] mt-5' src={Bannercur} alt="" />

    </div>
  )
}

export default Hero