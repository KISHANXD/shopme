import React from "react";
import CreateItem from "../CreateItem";
import { withRouter } from "react-router-dom";
import './styles.css'

class ProductsList extends React.Component {
    
    handleCart = () => {
        this.props.history.push('./cart')
    }

    render() {
        const { products } = this.props;
        let listItems = [];
        if(products) {
            products.forEach((item) => {
                listItems.push(
                    <CreateItem item={item} />
                )
            })
        }
        return(
            <React.Fragment>
                <div className="ProductList">{listItems}</div>
                <div className="cartBtnWrapper">
                    <button className="cartBtn" onClick={this.handleCart}>CART</button>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(ProductsList);