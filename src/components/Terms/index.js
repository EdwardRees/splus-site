import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const Divider = () => (
  <span style={{ fontWeight: "bold", color: "#f79646", fontFamily: "Corbel" }}>
    {" "}
    &nbsp;&nbsp;|&nbsp;&nbsp;
  </span>
);
const Text = ({onClick, children }) => (
  <span onClick={onClick} style={{ fontWeight: "300", color: "#606060", fontFamily: "Corbel" }}>
    {children}
  </span>
);



const Terms = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  if (!modal) {
    return <Text onClick={toggle}>Terms and Conditions</Text>;
  } else {
    return (
      <div>
      <span onClick={toggle}>Terms and Conditions</span>
        <Modal toggle={toggle} isOpen={modal}>
          <ModalHeader toggle={toggle}>Terms and Conditions</ModalHeader>
          <ModalBody>
            <p>
              Operation
              <br />
              This website is operated by S Plus Group Limited. All inquiries
              may be directed to:
              <br />S Plus Group Limited
              <br />
              unit 1507 <Divider /> 15 floor
              <br />chai wan industrial city phase 2
              <br />70 wing tai road
              <br />chai wan
              <br />
              hong kong
              <br />
              or
              <br />
              info@splusgroup.net
              <br />
              <br />
              Usage
              <br />
              Your use of this website is governed by these terms and
              conditions. Please take the time to review them. Terms and
              Conditions may change from time to time. Users should routinely
              check for changes to the Terms and Conditions.
              <br />
              <br />
              Your use of www.splusgroup.net constitutes your agreement to
              follow these rules and to be bound by them. They apply to the
              entirety of the website and its contents. If you do not agree with
              any of these terms and conditions, do not use the
              www.splusgroup.net website.
              <br />
              <br />
              <br />
            </p>
            <p>
              General
              <br />
              This website and its contents on this website are intended to
              provide general information only. Therein the information, product
              and activity mentioned is related to Hong Kong and to S Plus Group
              Limited colleagues, clients and potential customers. Such
              information may be neither relevant nor appropriate for people
              located in locations outside of Hong Kong. S Plus Group Limited
              have made every effort to be as accurate as possible, however, S
              Plus Group Limited makes no warranties, either express or implied,
              as to the accuracy of the information contained in any of the
              materials on this website.
              <br />
              <br />
              <br />
            </p>
            <p>
              Ownership of rights
              <br />
              All rights, including copyright, in this website are owned by or
              licensed to S Plus Group Limited.  The materials found on
              www.splusgroup.net including but not limited to all text,
              graphics, drawings, photographs and data in whatever form are
              owned by S Plus Group Limited or related companies or licensors
              who have reserved their intellectual property rights.
              <br />
              <br />
              Any use of this website or its contents, including copying or
              storing it or them in whole or part, other than for your own
              personal, non-commercial use is prohibited without the permission
              of S Plus Group Limited. You may not modify, reproduce,
              distribute, re-post or make available to the public anything on
              this website for any purpose.
              <br />
              <br />
              <br />
              Virus to your Computer
              <br />S Plus Group Limited makes every effort to ensure that this
              website is free from bugs or viruses. We do not guarantee that
              your use of this website won’t cause damage to your computer and
              shall not be liable for loss or damage of either equipment or data
              which may arise because of using this website.
              <br />
              <br />
              <br />
            </p>
            <p>
              Links to other websites
              <br />
              www.splusgroup.net may from time to time contain links to other
              websites of interest. S Plus Group Limited cannot vet or have any
              control over their contents, therefore, S Plus Group Limited shall
              not accept any liability in respect of the use of these websites.
              <br />
              <br />
              <br />
              <br />
              Last updated on March 9, 2020
            </p>
          </ModalBody>
          <ModalFooter toggle={toggle}>
            <Button onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

export { Terms };
