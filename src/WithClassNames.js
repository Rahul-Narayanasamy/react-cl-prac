import "./ClassNamesPractice.css";

import React from "react";
import classnames from "classnames";

const WithClassNames = (props) => {
  const { success, alert, normal, isActive } = props;
  const clickHandler = () => {
    window.alert("Button Clicked!!!");
  };
  return (
    <div
      className={classnames("container", {
        success: success,
        alert: alert,
        normal: normal,
      })}
    >
      WithClassNames
      <button
        onClick={isActive ? clickHandler : null}
        className={classnames("btn", {
          active: isActive,
          disabled: !isActive,
        })}
      >
        Button - Click me
      </button>
    </div>
  );
};

export default WithClassNames;
