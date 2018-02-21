import { User, PaymentInfo } from '.';
import { Property } from './property';

export class RentTransaction {
    rentId: number;
    startdate: string;
    enddate: string;
    renter: User;
    property: Property;
    approval: number;
    payment: PaymentInfo;
}
