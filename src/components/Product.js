import React from "react";
import PropTypes from "prop-types";

Product.propTypes = {
  pricing: PropTypes.object.isRequired,
  itemDetails: PropTypes.object.isRequired
};

export default function Product({ pricing, itemDetails }) {
  return (
    <div className="product-widget">
      <img src={itemDetails.img} />
      <div className="product-details">
        <div className="product-title">{itemDetails.item_name}</div>
        <div className="product-price">$ {pricing.subTotal}</div>
        <div className="product-quantity">Qty: {itemDetails.quantity}</div>
        <div className="product-meta">{itemDetails.meta}</div>
      </div>
    </div>
  );
}
