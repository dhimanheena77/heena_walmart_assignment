import React from "react";
import Tooltips from "./Tooltips";
import PropTypes from "prop-types";

Item.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
  tooltipOptions: PropTypes.shape({
    message: PropTypes.string,
    position: PropTypes.string
  }),
  children: PropTypes.any
};

export default function Item({
  label,
  value,
  highlight = false,
  tooltipOptions,
  children
}) {
  return (
    <div className="item">
      <span className="label-div">
        <span
          className="label"
          style={
            tooltipOptions ? { position: "absolute", cursor: "pointer" } : {}
          }
        >
          {label ? label : null}
          {tooltipOptions ? <Tooltips {...tooltipOptions} /> : null}
        </span>
        {children}
      </span>
      <span className={`value ${highlight ? "highlight" : ""}`}>{value}</span>
    </div>
  );
}
