import React from "react";

import "./form-input.styles.scss";

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  const shrinkClassName = otherProps.value.length ? "shrink" : "";
  const labelClassName = `${shrinkClassName} form-input-label`;
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      ></input>
      {label ? <label className={labelClassName}>{label}</label> : null}
    </div>
  );
};
