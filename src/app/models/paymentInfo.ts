import { User } from '.';

export class PaymentInfo {
    id: number;
    user: User;
    cc: string;
    ed: string;
    cvv: number;
}
