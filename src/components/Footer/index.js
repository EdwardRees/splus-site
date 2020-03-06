import React from "react";

const Divider = () => (
  <span style={{ fontWeight: "bold", color: "#f79646" }}> | </span>
);

const Text = ({ children }) => (
  <span style={{ fontWeight: "300", color: "#606060" }}>{children}</span>
);

const Footer = () => (
  <div
    className="text-center"
    style={{ display: "flex", flexDirection: "column", paddingTop: 10, paddingBottom: 10, }}
  >
    <div>
      <span style={{ color: "#606060", fontWeight: "bold" }}>S Plus</span>{" "}
      <span style={{ color: "#bfbfbf" }}>Group Limited</span>
    </div>
    <div>
      <Text>copyright 2020</Text>
      <Divider />
      <Text>all rights reserved</Text>
      <Divider />
      <Text>terms and conditions</Text>
    </div>
  </div>
);

export { Footer };
