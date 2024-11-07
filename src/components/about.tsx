

import { Button } from "./ui/button"
function About() {
  return (
    <section>
  <div className=" bg-[#EEF0FC] w-full mt-14  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 mt-10 mb-10 ml-20 mr-20 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://img.freepik.com/free-photo/yellow-car-with-number-70-side_1340-23401.jpg"
          className="absolute inset-0 h-full w-full object-cover shadow-2xl"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">About Our Business</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <Button className="mt-8 px-8 py-6 text-lg">Learn More</Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default About