import React from "react";
import companyprofile from '../articles/pdf/S+ Company Profile v3 - short (eng).pdf';

const About = () => {
  return (
    <div className="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <strong>
              <span
                id="cnText"
                style={{color: "#606060", fontSize: "25px", textAlign: 'left'}}
              >
                <br />
                <p>提供舒適優閒及安全的家居生活是我們的首要服務‭ ‬。</p>
    
                <p>
                  S<sup style={{color: "#F79646"}}>‭+</sup>‬ 的服務宗旨以人為本‭
                  ‬。因此，與一般承建商的裝置服務有別，我們提供專業顧問，先了解每使用者的不同需要，繼而提供各種安全裝置設施，但求讓使用者得到適用的設備，從而在熟悉的環境享受獨立，自主，及安全的生活。
                </p>
              </span>
            </strong>
    
            <br />
            <br />
            <strong>
              <span
                id="text"
                style={{color: "#606060", fontSize: "25px", textAlign:"left", float: "left"}}
              >
                <p>
                  Your comfort and safety is our passion.  Especially in the home -
                  <span style={{color: "#F79646"}}>your home</span>.  
                </p>
    
                <p>
                  We put people first in our service with an approach differing from
                  normal contracting.  S
                  <sup style={{color: "#F79646"}}>+</sup> provide professional
                  consultation to understand your special needs, provide a range of
                  safety products accommodating those needs and install them with
                  that customized purpose in your home.   Our aim is to cater for
                  everyone’s differing and personal requirement so they can
                  comfortably enjoy staying in a familiar place - independent and
                  safe.
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
            <span id="links">
              <a
                href={companyprofile}
                target="_blank"
              >
                Company Profile
              </a>
              <br />
            </span>
            <br />
            <br />
            <br />
            {/* <div id="modal" /> */}
          </div>
        </div>
    </div>
  );
};

export { About };
