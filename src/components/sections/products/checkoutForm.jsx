import { cartItems } from '@/db/cartItems'
import React from 'react'
import Link from 'next/link'

const CheckoutForm = () => {
    const subTotal = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    const shippingCost = 30
    const total = subTotal + shippingCost
    return (
        <section className="checkout-area ptb-100">
            <div className="container">
                <div className="user-actions">
                    <i className="bx bx-log-in" />
                    <span>Returning customer? <Link href="/login">Click here to login</Link></span>
                </div>
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Billing Details</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>First Name <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Address <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Town / City <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>State / County <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Postcode / Zip <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email Address <span className="required">*</span></label>
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Phone <span className="required">*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="create-an-account" />
                                            <label className="form-check-label" htmlFor="create-an-account">Create an account?</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                            <label className="form-check-label" htmlFor="ship-different-address">Ship to a different address?</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols={30} rows={5} placeholder="Order Notes" className="form-control" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="order-details">
                                <h3 className="title">Your Order</h3>
                                <div className="order-table table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            {
                                                cartItems.map(({ id, name, price }) => (
                                                    <tr key={id}>
                                                        <td className="product-name"><Link href="/single-products">{name}</Link></td>
                                                        <td className="product-total">
                                                            <span className="subtotal-amount">${price.toFixed(2)}</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            <tr>
                                                <td className="order-subtotal"><span>Cart Subtotal</span></td>
                                                <td className="order-subtotal-price">
                                                    <span className="order-subtotal-amount">${subTotal.toFixed(2)}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="order-shipping"><span>Shipping</span></td>
                                                <td className="shipping-price">
                                                    <span>${shippingCost.toFixed(2)}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="total-price"><span>Order Total</span></td>
                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">${total.toFixed(2)}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="payment-box">
                                    <div className="payment-method">
                                        <p>
                                            <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                                            <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label>
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                        </p>
                                        <p>
                                            <input type="radio" id="paypal" name="radio-group" />
                                            <label htmlFor="paypal">PayPal</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="cash-on-delivery" name="radio-group" />
                                            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                                        </p>
                                    </div>
                                    <button type="submit" className="default-btn"><i className="bx bx-paper-plane" /> <span>Place Order</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default CheckoutForm