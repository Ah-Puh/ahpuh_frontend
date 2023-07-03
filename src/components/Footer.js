import React from "react";
import "./Footer.css";
import logoWhite from "../image/main_logoWhite.png";

function Footer(props) {
  return (
    <div className="footer">
        <div className="right">
      <div className="left-section">
        <img className="logo" src={logoWhite}/>
      </div>
      <div className="center-section">
        <h2 className="about-us">About Us</h2>
        <p className="service-text">
          서핑을 즐기는 당신을 위한 맞춤 서비스
        </p>
      </div>
      <div className="right-section">
        <h2 className="contact-us">Contact Us</h2>
        <p className="team-members">
          Team AHPUH
          <br />
          서다원 엄기훈 채다희 황세훈
          <br />
          이다현 박윤혜 유하임 천현우
        </p>
        </div>
      </div>
      <div className="bottom-section">
        <p className="copyright">
          © 2023 아푸(Ah Phu) All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
