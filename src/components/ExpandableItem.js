import React, { Component } from "react";
import PropTypes from "prop-types";

class ExpandableItem extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const { isClicked } = this.state;
    this.setState({isClicked : !isClicked})
  }

  render() {
    const { isClicked } = this.state;
    const { defaultText, alternateText, children } = this.props;
    return (
      <div className="expandable-widget">
        <a
          onClick={this.handleClick}
          className="title"
        >
          {isClicked ? alternateText : defaultText}
          <span className="sign">{isClicked ? "-" : "+"}</span>
        </a>
        {isClicked ? children : null}
      </div>
    );
  }
}

ExpandableItem.propTypes = {
  defaultText: PropTypes.string.isRequired,
  alternateText: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default ExpandableItem;
