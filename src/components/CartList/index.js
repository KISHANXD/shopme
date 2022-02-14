import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from '../../redux/actions';
import { withRouter } from "react-router-dom";
import './styles.css'

class CartList extends Component {
    
    handleItemRemove =(item) => {
        this.props.addToCart(item.productId);
    }

    render() {
        const { cartItems, products } = this.props;
        let inCartItemsData = [];
        products && products.map((track) => {
            if(cartItems && cartItems.includes(track.productId)) {
                inCartItemsData.push(track);
            }
        });
        let displayCartItems = [];
        let totalPrice = 0;
        inCartItemsData.map((track) => {
            totalPrice += track.mrp
            displayCartItems.push(
                <div className="outerMargin">
                    <div className="imageWrapper">
                        <img src={track.searchImage} className="cartImage" />
                    </div>
                    <div className="itemData">
                        <div>Brand Name: {track.brand}</div>
                        <div>Product Name: {track.product}</div>
                        <div>Price: {track.mrp}</div>
                    </div>
                </div>
            )
        });
        return (
            <div className="cartPage">
                <button onClick={()=>this.props.history.push('./')} className="backBtn">Back</button>
                {displayCartItems}
                <div className="totalPriceDisplay">
                    <button className="totalPriceBtn" onClick={()=>alert('Order Confirmed!!!')}>Total Price: {totalPrice} <br/>Proceed to Checkout?</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addToCart,
};

const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
    products: state.posts.products
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartList));