import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";

import Item from "./components/Item";
import ExpandableItem from "./components/ExpandableItem";
import Product from "./components/Product";
import Discount from "./components/Discount";
import { getPricingData } from './helper';
import * as Constants from './Constants';
import rootReducer from "./reducers";

import "./styles.scss";

export class App extends Component {

  componentDidMount() {
    const { getProductData } = this.props;

    const pricingData = getPricingData();
    pricingData.then( (data) => getProductData(data) );
  }

  render() {
    const { product, discount } = this.props;
    if(Object.keys(product).length !== 0){
      return (
        <div className="widget">
          <div className="summary">
            <Item label="Subtotal" value={`$ ${product.pricing.subTotal}`}>
              <span className="brackets">({product.itemDetails.quantity} item)</span>
            </Item>
            <Item
              tooltipOptions={{
                message:
                  "Picking up your order helps cut costs and we pass the savings on to you",
                position: "bottom"
              }}
              value={`$ -${product.pricing.savings}`}
              highlight
            />
            <Item label="Est. taxes & fees" value={`$ ${product.pricing.tax}`}>
              <div className="label">(Based on {product.itemDetails.id})</div>
            </Item>
            {discount ? <Item label="Discount" value={`${discount} %`} /> : null}
          </div>
          <div className="total">
            <Item
              label="Est. total"
              value={`$ ${Math.round(
                100 * (product.pricing.subTotal + product.pricing.tax - product.pricing.savings) * (1 - discount / 100)
              ) / 100}`}
              highlight
            />
          </div>
          <ExpandableItem
            defaultText="See Item Details"
            alternateText="Hide Item Details"
          >
            <Product {...product} />
          </ExpandableItem>
          <ExpandableItem
            defaultText="Apply promo code"
            alternateText="Hide promo code"
          >
            <Discount />
          </ExpandableItem>
        </div>
      );
    }
    else return null;
  }
}

const store = createStore(rootReducer);
const rootElement = document.getElementById("root");

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getProductData: (payload) => dispatch({ type: Constants.GET_PROUDUCT_DETAILS, payload })
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);
