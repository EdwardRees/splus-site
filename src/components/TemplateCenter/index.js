import React from 'react'

const TemplateCenter = ({specificHeight, children}) => {
  return (
    <div className="no-gutters container-fluid text-center" style={{backgroundColor: "#E7E6E6", borderLeft: "1px solid white", borderRight: "1px solid white", padding: 20, height: specificHeight === undefined ? "auto" : specificHeight, paddingBottom: 30, paddingTop: 25}}>
      {children}
    </div>
  )
}

export { TemplateCenter };