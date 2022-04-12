import React from "react";
import "./Pricing.css";
function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing-wrapper">
        <div className="title">
          <h1>Our Pricing</h1>
        </div>
        <div className="switch">
          <p>Annualy</p>
          <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <label className={`react-switch-label`} htmlFor={`react-switch-new`}>
            <span className="react-switch-button" />
          </label>
          <p>Monthly</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Pricing;
