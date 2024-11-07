import Navbar from '@/components/navbar';
import Inputtype from '@/Data/inputtype.json';
import InputField from '@/Screen/AddListing/Components/InputField';  // Fixed typo
import Dropdown from './Components/dropdown';
import TextareaDemo from './Components/textarea';
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import Features from '@/Data/feature.json'
import { Button } from '@/components/ui/button';
import { useState } from 'react';


function AddListing() {

  const [checked, setChecked] = useState<Record<string, string>>({});

  const handelInputChange = (name: string, value: string | number) => {
    setChecked((prev: any) => ({ ...prev, [name]: value }));
  }

  const onSubmit = (valu: any) => {
    valu.preventDefault();
    console.log(checked);
  }


  return (
    <>
      <Navbar />
      <div className='px-2 my-20 md:px-20'>
        <h1 className='font-bold text-3xl'>Add New Listing</h1>
        <form action="" className='mt-10 border rounded-xl p-10'>
          {/* car details */}
          <div>
            <h1 className='font-medium text-xl mb-6'>Car Details</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {Inputtype.Inputtype.map((item, index) => (
              <div key={index}>
                <label className=' font-semibold'>{item?.label}{item?.required ? <span className='text-red-500 ml-1'>*</span> : ''}</label>
                {item.fieldtype === 'text' || item.fieldtype === 'number' ? <InputField item={item} handelInputChange={handelInputChange}/>
                : item.fieldtype === 'select' ? <Dropdown item={item} handelInputChange={handelInputChange}/>
                : item.fieldtype === 'textarea' ? <TextareaDemo item={item} handelInputChange={handelInputChange}/>
                :null}
              </div>
            ))}
          </div>
          
          <Separator className='mt-10 mb-7 ' />
          
          {/* Car features */}
           <div>
            <h1 className='font-medium text-xl mb-6'>Car Features</h1>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
            {Features.Features.map((item, index) => (
              <div className=' flex items-center gap-2' key={index}>
                
                <Checkbox onCheckedChange={(value: any) => handelInputChange(item.label, value)} /> <h1 className='font-semibold text-gray-700'>{item.label}</h1>

              </div>
            ))}
            
           </div>
           <div className='mt-10 flex justify-end'>
            <Button type='submit' onClick={onSubmit}>Submit Listing</Button></div>
           </div> 
          {/* Car images */}
        </form>
      </div>
    </>
  );
}

export default AddListing;
