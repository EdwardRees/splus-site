import React from 'react'

const TemplateCenter = ({children}) => {
  return (
    <div style={{backgroundColor: "#E7E6E6", borderLeft: "1px solid white", borderRight: "1px solid white", padding: 20}}>
      {children}
    </div>
  )
}

export { TemplateCenter };