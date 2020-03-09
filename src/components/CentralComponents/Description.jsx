import React from 'react';

const Description = ({children}) => (
  <div className="center-info" style={{paddingTop: 20, paddingRight: 40, paddingLeft: 40, color: "#606060", fontFamily: "Avenir"}}>
    {children}
  </div>
)

export { Description };