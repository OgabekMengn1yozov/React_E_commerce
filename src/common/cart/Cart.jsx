import React from "react";

const Cart = ({addToCart, cartItem}) => {

    console.log("cart ishladi")
    return (
        <>
            <section className="cart-item">
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItem?.length === 0 && <h1 className="no-items product">No items are add in Cart</h1>}

                       {cartItem.map((item) => {
                        // const prodcutQty = item.price *  item.prodcutQty

                        return (
                            <div className="cart-list product d_flex">
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                            </div>
                        )
                       })} 
                       <h1>Salom</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart