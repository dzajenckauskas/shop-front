import { ProductType } from "../ProductTypes";

export type CartType = {
    items: CartItemType[];
    subtotal: number;
    total: number;
    quantity: number;
}

export type CartItemType = {
    id?: number;
    product: ProductType;
    qty: number;
    lineTotal?: number;
}