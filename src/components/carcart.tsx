import { Separator } from "@/components/ui/separator"
import { TfiMoreAlt } from "react-icons/tfi";
import { GiGearStick } from "react-icons/gi";

interface CarcartProps {
  name: string;
 fueltype: string;
 module: string;
 type: string;
 images: any;
 miles: number;
 price: string;
}

import { LuFuel } from "react-icons/lu";
import { SiSpeedtest } from "react-icons/si";


const Carcart: React.FC<CarcartProps> = ({ name, fueltype, module, type, images, miles, price}) => {
  return (
      <div className="mb-10 rounded-xl border flex flex-col justify-center">
        <h1 className=" absolute font-semibold bg-yellow-400/90 text-black px-3 rounded-sm ml-4 shadow-xl mt-[-390px] ">{type.slice(0, 8)}</h1>
          <img src={images} className=" shadow-lg ml-[6px] mt-[0.4rem] w-[310px] h-[190px] rounded-t-xl" alt="img" />
          <div className="p-4">
            <h2 className="font-bold text-center text-black text-lg mb-2">{name}</h2>
            <Separator className=" mt-4" orientation="horizontal" />
            <div className="flex ml-7 justify-center gap-4 mt-5">
              
               <div className="flex flex-col items-center justify-center">
                <LuFuel className="mr-[1.60rem]" />
                <h1 className=" font-semibold">{miles} Miles</h1>
               </div>

               <div className="flex flex-col items-center justify-center">
                <SiSpeedtest className="mr-[1.60rem]"/>
                <h1 className=" font-semibold">{miles} Miles</h1>
               </div>

               <div className="flex flex-col items-center justify-center">
                <GiGearStick className="mr-[1.60rem]" />
                <h1 className=" block font-semibold">{miles} Miles</h1>
               </div>
               
            </div>
            <Separator className=" mt-4" orientation="horizontal" />
            <span className="flex justify-center gap-[4rem] pt-2 pb-2 lg:bg-[#EEF0FC] mt-7 rounded-md ">
              <span className="text-lg font-semibold"><span className=" font-semibold ">Price:</span> ${price}</span>
              <span className="font-semibold flex items-end ml-16 md:ml-0  md:gap-1 text-primary cursor-pointer underline">More Info...</span>
            </span>
          </div>
      </div>
  );
};

export default Carcart;
