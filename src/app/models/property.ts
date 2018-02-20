<<<<<<< HEAD:src/app/property.ts
import { User } from './models/index';
export class Property {
=======
import { User } from './index';
export class Property{
>>>>>>> viewAllProperties:src/app/models/property.ts
    propertyId: number;
    owner: User;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    currentRentPrice: number;
    rating: number;
    availability: number;
}
