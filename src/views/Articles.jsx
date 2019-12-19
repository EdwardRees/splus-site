import React from "react";

import seniorLiving from "../articles/pdf/S+ Home Type Definitions v1 (eng).pdf";
import firstResponderCN from "../articles/pdf/S+ First responder article (cn).pdf";
import firstResponderEN from "../articles/pdf/S+ First responder article (eng).pdf";
import doorsLocksCN from "../articles/pdf/S+ Doors and locks article (cn).pdf";
import doorsLocksEN from "../articles/pdf/S+ Doors and locks article (eng).pdf";
import grabCN from "../articles/pdf/S+ Grab a rail article v2 (cn) (1).pdf";
import grabEN from "../articles/pdf/S+ Grab a rail article v2 (eng).pdf";
import planCN from "../articles/pdf/Plan for living safely at home v2 (CN).pdf";
import planEN from "../articles/pdf/S+ Safe Home article v1 (eng).pdf";

const Articles = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <strong>
            <span
              id="cnText"
              style={{ color: "#606060", fontSize: "25px", textAlign: "left" }}
            >
              <br />
              <p>
                理想的退休生活，是擁有一個舒適的環境，快樂無憂‭
                ‬。及早認識家居安全的重要性，安全設施的種類，選擇附合你的需要，設立安全家居環境，預防不必要的意外，從而安享積極、無憂、健康的退休生活‭
                ‬。
              </p>

              <p>
                立即起動，推動「
                <span style={{ color: "#F79646" }}>安全文化</span>」。
              </p>
            </span>
          </strong>

          <br />
          <br />
          <strong>
            <span
              id="text"
              style={{
                color: "#606060",
                fontSize: "25px",
                textAlign: "left",
                float: "left"
              }}
            >
              <p>
                Early planning of your current needs and how those needs
                may evolve over time will lead to the choices you have. By
                learning about different senior living options, you can choose
                solutions that are right for you and ensure you continuously
                enjoy a happy, healthy, and safe home environment.‭ ‬
              </p>

              <p>
                Act now, promote{" "}
                <span style={{ color: "#F79646" }}>‘safety culture’</span>.
              </p>
            </span>
            <br />
            <br />
          </strong>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "#3C6074",
              fontSize: "20px"
            }}
          >
            Articles
          </span>
          <br />
          <span id="links" style={{ color: "#3C6074" }}>
            <a href={seniorLiving} target="_blank">
              Senior Living in HK - Residential terms “defined”
            </a>
            <br />
            <a href={firstResponderCN} target="_blank">
              為緊急救援⼀刻作好準備
            </a>
            <span style={{ color: "#F79646" }}>
              <strong>&nbsp;&nbsp;|&nbsp;&nbsp;</strong>
            </span>
            <a href={firstResponderEN} target="_blank">
              {" "}
              Be Ready for an Emergency
            </a>
            <br />

            <a href={doorsLocksCN} target="_blank">
              不要忽略家居門鎖安全
            </a>
            <span style={{ color: "#F79646" }}>
              <strong>&nbsp;&nbsp;|&nbsp;&nbsp;</strong>
            </span>
            <a href={doorsLocksEN} target="_blank">
              Watch out for the the locks and doors
            </a>
            <br />

            <a href={grabCN} target="_blank">
              抓緊扶手安全生活
            </a>
            <span style={{ color: "#F79646" }}>
              <strong>&nbsp;&nbsp;|&nbsp;&nbsp;</strong>
            </span>
            <a href={grabEN} target="_blank">
              Grab a rail for safe living
            </a>
            <br />
            <a href={planCN} target="_blank">
              為舒適安居 作好計劃
            </a>
            <span style={{ color: "#F79646" }}>
              <strong>&nbsp;&nbsp;|&nbsp;&nbsp;</strong>
            </span>
            <a href={planEN} target="_blank">
              Plan for living safely at home
            </a>
          </span>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export { Articles };
