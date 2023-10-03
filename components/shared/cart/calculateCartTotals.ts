import { Draft } from "immer";
import { CartType } from "./CartTypes";


export const calculateCartTotals = (cart: Draft<CartType>) => {
  const totals = cart.items.reduce((p, c) => {
    p.quantity += c.qty
    p.subtotal += c.qty * c.product.attributes?.price
    return p
  }, {
    quantity: 0,
    subtotal: 0,
  })

  cart.quantity = totals.quantity

  cart.subtotal = totals.subtotal

  cart.total = cart.subtotal
  if (cart.total < 0) { cart.total = 0 }
} 