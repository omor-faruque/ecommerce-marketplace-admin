import { Address } from "./address";
import { CartItem } from "./cart-item";

export interface Order {
    guestFullName: string;
    guestEmail: string;
    cartItems: CartItem[];
    orderDate:string;
    totalAmount: number;
    shippingAddress: Address;
    orderStatus:string;

}
