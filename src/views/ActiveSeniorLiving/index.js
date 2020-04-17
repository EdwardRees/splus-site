import React from 'react'
import { CentralInfo, Description, Divider, Heading } from "../../components/";

const ActiveSeniorLiving = () => (
  <CentralInfo>
    <div style={{height: "80vh", paddingTop: "12vh"}}>
      <Heading name="Active Senior Living" />
      <Divider />
      <Description>
        <div style={{paddingTop: "15vh", paddingBottom: "15vh"}}>
          <p>coming</p>
          <p>next</p>
        </div>
      </Description>
      <Divider />
      <Description>
        <span>portfolio</span>
      </Description>
    </div>
  </CentralInfo>
)

export { ActiveSeniorLiving };