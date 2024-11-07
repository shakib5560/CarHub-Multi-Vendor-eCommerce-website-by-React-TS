import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select" ;
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Brand from '@/Data/pricedata';


function Search() {


  return (
    <>
      <div className='flex md:p-2 bg-white rounded-md md:rounded-full flex-col
      md:flex-row items-center  gap-10 px-5 w-[50vw] md:h-[80px] pt-6 pb-6 '>


        <Select>
          <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg ">
            <SelectValue placeholder="Condition" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="old">Old</SelectItem>
            <SelectItem value="refurbished">Refurbished</SelectItem>
          </SelectContent>
        </Select>
      
        <Separator orientation="vertical" className='hidden md:block' />

        <Select>
          <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg ">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent>
            {Brand.map((brand) => (
              <SelectItem key={brand.id} value={brand.name}>
                {brand.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Separator orientation="vertical" className='hidden md:block' />

        <Select>
          <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg ">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">White</SelectItem>
            <SelectItem value="dark">Black</SelectItem>
            <SelectItem value="Red">Red</SelectItem>
            <SelectItem value="Blue">Blue</SelectItem>
            <SelectItem value="Green">Green</SelectItem>
            <SelectItem value="Yellow">Yellow</SelectItem>
            <SelectItem value="Off-White">Off-White</SelectItem>
            <SelectItem value="Gray">Gray</SelectItem>
          </SelectContent>
        </Select>
       <div>
        <CiSearch className='text-2xl mr-4 cursor-pointer bg-[#080033] hover:bg-primary text-white h-10 w-10 p-2 hover:scale-105 transition-all rounded-full' />
       </div>

      </div>
    </>
  )
}

export default Search