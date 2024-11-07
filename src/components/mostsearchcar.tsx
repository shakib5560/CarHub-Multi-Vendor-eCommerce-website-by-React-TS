import carList from '@/Data/fakedata'; // Adjust the path based on your project structure
import Carcart from '@/components/carcart';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



function Mostsearchcar() {
    console.log(carList); // This will log the list of generated cars

    return (
        <div className=' mx-[5.5rem] '>

            <Carousel>
                <CarouselContent>
                    {carList.map((car, index) => (
                        <CarouselItem className='lg:basis-1/4 md:basis-1/3 sm:basis-1/2'>

                            <Carcart name={car.name} key={index} fueltype={car.fueltype} module={car.module} type={car.type} images={car?.images} miles={car.miles} price={car.price} />

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>
    );
}

export default Mostsearchcar;
