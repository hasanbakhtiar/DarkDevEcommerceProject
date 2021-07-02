import React, { Component } from 'react';
import CartItem from '../Cart/CartItem';

class CartRow extends Component {
    render(){
        return(
            <div className="row mt-3">
            <CartItem productname="Orange Cream" productprice="39$"/>
            <CartItem productname="Orange Cream" productprice="39$"/>
            <CartItem productname="Orange Cream" productprice="39$"/>
            <CartItem productname="Orange Cream" productprice="39$"/>
            <CartItem productname="Orange Cream" productprice="39$"/>
            </div>
        );
    }
}

class CartContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="cartcon-header mt-5 mb-2 d-flex align-items-center justify-content-start w-100">
                <h3>New Arrivals</h3>

                </div>
                
               <CartRow />
               <CartRow />
         
            </div>
        )
    }
}

export default CartContainer
