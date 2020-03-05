import React, { Fragment } from "react";

const Logo = ({ size = 2, WIP }) => {
  if(WIP){
    return (
      <Fragment>
        <span style={{ color: "#BFBFBF", fontWeight: 'bold' }}>S</span>
        <span style={{ color: " #F46100", fontWeight: 'bold' }}>
          <sup style={{fontWeight: 'bold'}}>+</sup>
        </span>
      </Fragment>
    );
  } else {
      return (
        <div>
          <span style={{ color: "#BFBFBF", fontSize: `${size}rem`, fontWeight: 'bold' }}>S</span>
          <span style={{ color: " #F46100", fontSize: `${size}rem`, fontWeight: 'bold' }}>
            <sup style={{ fontWeight: 'bold'}}>+</sup>
          </span>
        </div>
      );

  }
};

export { Logo };
