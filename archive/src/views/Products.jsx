import React from "react";
import firstResponderCN from '../products/HK First Responder (CH-ENG) eForm.pdf'
import homeSafetyCN from '../products/S+ Home Safety Checklist v3 (CN).pdf'
import homeSafetyEN from '../products/S+ Home Safety Checklist v3 (eng).pdf'
import bathroomSolutions from '../products/Bathroom Solutions Brochure (eng).pdf'
import comfortableLiving from '../products/Comfort-Living Solutions Brochure (eng).pdf'

const Products = () => {
  return (
    <div  className="container">
      <div  className="row">
        <div  className="col-lg-12 text-center">
          <strong>
            <span
              id="cnText"
              style={{color: "#606060", fontSize: "25px", textAlign: 'left', float: 'left'}}
            >
              <br />S<sup style={{color: "#F79064"}}>+</sup>{" "}
              提供多元方案，配合隨年齡增長或有体能需要的人仕，改善家居設施，延續健康活躍的積極自主生活模式。
            </span>
          </strong>
          <br />
          <br />
          <strong>
            <span
              id="text"
              style={{color: "#606060", fontSize: "25px", textAlign: 'left', float: 'left'}}
            >
              <br />
              <p>
                S<sup style={{color: "#F79064"}}>+</sup> offer solutions to meet
                your evolving independent living needs and add value to your
                active lifestyle - services and installations for the{" "}
                <span style={{color: "#F79646"}}>home</span>
              </p>
            </span>
          </strong>

          <br />
          <br />

          <span id="SecondaryText" />

          <span id="links2">
            <p style={{textDecoration: "underline"}}>多元服務 : Services</p>
            <a
              href={firstResponderCN}
              target="_blank"
            >
              緊急醫療救護資料料
              <span style={{color: "#F79646"}}>
                <strong>&nbsp;&nbsp;|&nbsp;&nbsp;</strong>
              </span>
              Personal Emergency Information
            </a>
            <br />
            <a
              href={homeSafetyCN}
              target="_blank"
            >
              長者家居安全檢視清單
            </a>
            <span style={{color: "#F79646"}}>
              <strong>&nbsp;&nbsp;|&nbsp;&nbsp;</strong>
            </span>
            <a
              href={homeSafetyEN}
              target="_blank"
            >
              Senior Living - Home Safety Checklist
            </a>
            <br />
            <br />
            <p style={{textDecoration: "underline"}}>
              產品配套系列 : Product Solutions
            </p>
            <a
              href={bathroomSolutions}
              target="_blank"
            >
              Bathroom Solutions Brochure
            </a>
            <br />
            <a
              href={comfortableLiving}
              target="_blank"
            >
              Comfortable Living Solutions Brochure
            </a>
            <br />
            <br />
            <p style={{textDecoration: "underline"}}>
              {/* <a href="#info" data-toggle="modal" style="color:#3c6074"> */}
                其他查詢 : More Information
              {/* </a> */}
            </p>
            <br />
          </span>
        </div>
      </div>
    </div>
  );
};

export { Products };
