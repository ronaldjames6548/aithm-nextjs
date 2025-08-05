import { cartItems } from '@/db/cartItems'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CartTable = () => {
    return (
        <div className="cart-area ptb-100">
            <div className="container">
                <form>
                    <div className="cart-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="product-thumbnail">
                                            <Link href={'/single-products'}><Image width={80} height={91} sizes='100vw' src={item.image} alt={item.name} /></Link>
                                        </td>
                                        <td className="product-name">
                                            <Link href={'/single-products'}>{item.name}</Link>
                                        </td>
                                        <td className="product-price">
                                            <span className="unit-amount">${item.price.toFixed(2)}</span>
                                        </td>
                                        <td className="product-quantity">
                                            <div className="input-counter">
                                                <span className="minus-btn"><i className="bx bx-minus" /></span>
                                                <input type="text" defaultValue={item.quantity} />
                                                <span className="plus-btn"><i className="bx bx-plus" /></span>
                                            </div>
                                        </td>
                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">${(item.price * item.quantity).toFixed(2)}</span>
                                            <Link href="#" className="remove"><i className="bx bx-trash" /></Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    <div className="cart-buttons">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-sm-12 col-md-7">
                                <div className="shopping-coupon-code">
                                    <input type="text" className="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code" />
                                    <button type="submit">Apply Coupon</button>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-md-5 text-right">
                                <Link href="#" className="default-btn"><i className="bx bx-refresh" /> <span>Update Cart</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="cart-totals">
                        <ul>
                            <li>Subtotal <span>$800.00</span></li>
                            <li>Shipping <span>$30.00</span></li>
                            <li>Total <span>$830.00</span></li>
                        </ul>
                        <Link href="/checkout" className="default-btn"><i className="bx bx-paper-plane" /> <span>Proceed to Checkout</span></Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CartTable