import React, { Component } from 'react';
import cartitem from '../../img/cartitem.jpg';

class CartItem extends Component {
    render() {
        return (
            <div className="col">
                  <div className="card" >
        <img src={cartitem} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.productname}</h5>
          <p className="card-text">{this.props.productprice}</p>
          <button className="btn btn-primary">Add Cart</button>
        </div>
      </div>
            </div>
        )
    }
}

export default CartItem
