import React from "react";
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions';
import './styles.css';

class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnText: props.cartItems.includes(props.item.productId) ? 'Added to Cart! Want to remove?' : 'Add to Cart',
            isAdded: props.cartItems.includes(props.item.productId) ? true : false,
        }
    }

    handleAddToCart = () => {
        const { item } = this.props;
        const { isAdded } = this.state;

        if(!isAdded) {
            this.setState({
                btnText: 'Added to Cart! Want to remove?',
                isAdded: true
            });
        } else {
            this.setState({
                btnText: 'Add to Cart',
                isAdded: false
            });
        }
        this.props.addToCart(item.productId);
    }
    
    render() {
        const { item, cartItems } = this.props;
        const { btnText } = this.state;
        return (
            <React.Fragment>
                <div className="itemBody">
                    <div className="itemtopData">
                        <span className="topLeftdata">{`Gender: ${item.gender}`}</span>
                        <span className="topRightData">{`Color: ${item.primaryColour}`}</span>
                    </div>
                    <div className="itemImage">
                        <img src={item.searchImage} className="image" />
                    </div>
                    <div className="itemTitle">{item.brand}</div>
                    <div className="itemDec">{item.product}</div>
                    <div className="itemCost">{`Cost: ${item.mrp}`}</div>
                    <div className="btnWrapper">
                        <button className="AddToCartBtn" onClick={this.handleAddToCart}>{btnText}</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
});

const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);