import { User } from './index';
export class Property{
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