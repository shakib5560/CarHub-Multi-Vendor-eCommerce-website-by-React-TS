import car1 from '@/assets/car (1).png';
import car2 from '@/assets/car (2).png';
import car3 from '@/assets/car (3).png';
import car4 from '@/assets/car (4).png';
import car5 from '@/assets/charging-station.png';
import car6 from '@/assets/car.png';
import car7 from '@/assets/electric-car.png';
import car8 from '@/assets/drive.png';
import car9 from '@/assets/car-insurance.png';

interface Category {
    id: number;
    icon: string;  // Update type to 'string' since it's an image URL
    name: string;
}

const Categorydata: Category[] = [
    {
        id: 1,
        icon: car1,
        name: 'Toyota'
    },
    {
        id: 2,
        icon: car2,
        name: 'Ford'
    },
    {
        id: 3,
        icon: car3,
        name: 'Honda'
    },
    {
        id: 4,
        icon: car4,
        name: 'Chevrolet'
    },
    {
        id: 5,
        icon: car5,
        name: 'BMW'
    },
    {
        id: 6,
        icon: car6,
        name: 'Audi'
    },
    {
        id: 7,
        icon: car7,
        name: 'Mercedes'
    },
    {
        id: 8,
        icon: car8,
        name: 'Lexus'
    },
    {
        id: 9,
        icon: car9,
        name: 'Nissan'
    }
];

export default Categorydata;
