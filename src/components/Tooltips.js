import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

class Tooltips extends Component {
  constructor() {
    super();
    this.state = {
      showTooltip: false
    };
    this.tooltip = createRef();
    this.hideTooltip = this.hideTooltip.bind(this);
  }
  hideTooltip() {
    this.setState({ showTooltip: false });
  }
  componentDidMount() {
    document.body.addEventListener("click", this.hideTooltip);
  }
  componentWillUnmount() {
    document.body.removeEventListener("click", this.hideTooltip);
  }
  render() {
    const { message, position } = this.props;
    return (
      <span className="tooltip">
        {this.state.showTooltip && (
          <div className={`tooltip-bubble tooltip-${position}`}>
            <div className="tooltip-message">{message}</div>
          </div>
        )}
        <a
          className="tooltip-trigger"
          onClick={() => this.setState({ showTooltip: true })}
          ref={this.tooltip}
        >
          Pickup Savings
        </a>
      </span>
    );
  }
}

Tooltips.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default Tooltips;
