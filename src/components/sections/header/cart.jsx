import React from 'react'

const Cart = () => {
    return (
        <div className="aithm-shop offcanvas offcanvas-bottom" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasRight">
            <div className="offcanvas-header">
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
                <div className="cart-details">
                    <i className="bx bx-cart-alt" />
                    <h4>No products in the cart.</h4>
                </div>
            </div>
        </div>

    )
}

export default Cart