import { faker } from '@faker-js/faker';

// Define the car data type
type Car = {
  name: string;
  fueltype: string;
  module: string;
  type: string;
  images: string;
  miles: number;
  price: string;
};

// Function to generate fake car data
function generateFakeData(): Car {
  const randomMiles = Math.floor(Math.random() * 1000000);
  return {
    name: faker.vehicle.vehicle(),
    fueltype: faker.vehicle.fuel(),
    module: faker.vehicle.model(),
    type: faker.vehicle.type(),
    images: 'https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?cs=srgb&dl=pexels-mikebirdy-100653.jpg&fm=jpg',
    miles: randomMiles,
    price: faker.finance.amount({ min: 100, max: 1000 })
  };
}

// Generate a list of fake cars (set count > 0 to avoid errors)
const carList: Car[] = faker.helpers.multiple(generateFakeData, { count: 10 });

export default carList;
