import React from "react";
import { withRouter } from "react-router-dom";
import './styles.css';

class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnText: 'Add to Cart',
            isAdded: false,
        }
    }

    handleAddToCart = () => {
        const { isAdded } = this.state;
        this.setState({
            btnText: isAdded ? 'Added to Cart! Want to remove?' : 'Add to Cart',
            isAdded: !isAdded
        });
    }
    
    render() {
        const { item } = this.props;
        const { btnText } = this.state;
        console.log(item);
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

export default withRouter(CreateItem);