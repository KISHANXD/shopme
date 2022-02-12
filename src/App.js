import React from "react";
import { connect } from "react-redux";
import ProductsList from "./components/ProductsList";
import Header from "./components/Header";

class App extends React.Component {
    render() {
        const { products } = this.props;
        return(
            <React.Fragment>
                {/* <Header /> */}
                <ProductsList products={products} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps)(App);