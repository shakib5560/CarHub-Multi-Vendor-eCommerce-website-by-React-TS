import React, { useState } from 'react';
import Untitled from '@/assets/Untitled-1.png';
import { UserButton, SignIn, useUser } from '@clerk/clerk-react';
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser(); // Use Clerk's useUser hook to check if the user is signed in

  return (
    <>
      <div className='h-[80px] items-center w-[90vw] ml-[5vw] mr-[5vw] flex justify-between shadow-sm'>
        <img src={Untitled} className='w-[11.5rem] hover:scale-105 transition-all ' alt="Logo" />

        <ul className='hidden md:flex text-lg font-medium gap-8'>
          <li className=' hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
          <li className=' hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
          <li className=' hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
          <li className=' hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
        </ul>

        <div className='md:hidden z-50'>
       <Select>
         <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Home" />
         </SelectTrigger>
            <SelectContent>
               <SelectItem value="home">Home</SelectItem>
                <SelectItem value="search">Search</SelectItem>
                 <SelectItem value="new">New</SelectItem>
                 <SelectItem value="preowned">Preowned</SelectItem>
            </SelectContent>
         </Select>

      </div>
        
        {isSignedIn ? 
          <div className='md:flex hidden items-center gap-5 h-9 w-auto'>
            <UserButton 
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-12 h-12',  // Set custom width and height
                userButtonPopover: 'p-2', // Customize the popover if needed
              },
            }}
            />
            <Link to={'/profile'}> <Button>Submit Listing</Button> </Link>
            
          </div>
          : 
          <div>
            <button onClick={() => setIsOpen(true)}>Login</button>
            {isOpen && <SignIn afterSignInUrl="/" />}
          </div>
        }
      </div>
    </>
  );
}

export default Navbar;
