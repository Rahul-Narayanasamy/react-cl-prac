import "./ClassNamesPractice.css";

import React from "react";

const WithoutClassNames = (props) => {
  const { success, alert, normal, isActive } = props;
  const clickHandler = () => {
    window.alert("Button Clicked!!!");
  };
  return (
    <div
      className={`container ${success ? "success" : null} ${
        alert ? "alert" : null
      } ${normal ? "normal" : null}`}
    >
      WithoutClassNames
      <button
        onClick={isActive ? clickHandler : null}
        className={`btn ${isActive ? "active" : "disabled"}`}
      >
        Button - Click me
      </button>
    </div>
  );
};

export default WithoutClassNames;
