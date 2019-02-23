import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Constants from '../Constants'
import { connect } from "react-redux";

class Discount extends Component {
  constructor() {
    super();
    this.state = {
      promoCode: "",
      showRemove: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleSubmit() {
    const { promoCode } = this.state;
    const { applyDiscount } = this.props;

    if (!promoCode) {
      alert("Discount code is required!");
      return;
    }
    if (promoCode.toUpperCase() !== "DISCOUNT") {
      alert("Wrong Discount code!");
      return;
    }
    this.setState({ showRemove: true})
    applyDiscount();
  }

  handleRemove() {
    const { removeDiscount } = this.props;

    this.setState({
      showRemove: false,
      promoCode: ""
    })
    removeDiscount();
  }

  render() {
    const { promoCode, showRemove } = this.state;
    return (
      <div className="promo-widget">
        <input
          value={promoCode}
          onChange={e => this.setState({ promoCode: e.target.value })}
        />
        <a onClick={this.handleSubmit}>Apply</a>
        { showRemove ? <a onClick={this.handleRemove} className="remove">{"x"}</a> : null }
      </div>
    );
  }
}

Discount.propTypes = {
  applyDiscount: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  applyDiscount: () => dispatch({ type: Constants.AVAIL_DISCOUNT }),
  removeDiscount: () => dispatch({type: Constants.REMOVE_DISCOUNT})
});

export default connect(
  null,
  mapDispatchToProps
)(Discount);
