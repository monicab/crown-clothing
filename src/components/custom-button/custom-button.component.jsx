import React from "react";

import "./custom-button.styles.scss";

export const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  const className = `${isGoogleSignIn ? "google-sign-in" : ""} custom-button`;
  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};
