import React from "react";
import { Fragment } from "react";


const Footer = () => {
  return (
    <Fragment>
      <hr className="style1"></hr>
      <footer className="footer-distributed">
        <div className="footer-left">
          <span className="leftText">Get in Touch</span>
          <p className="leftTextP">
            Be the first to know about exciting <br />
            new designs, special events,
            <br />
            store openings and much more
          </p>
          <form>
            <div className="input-group">
              <input type="text" name="EMAIL" placeholder="Email"></input>
            </div>
            <button className="subscribe">Subscribe</button>
          </form>
          <br />
          <p className="footerCompanyName">© 2019 Silver & Stone</p>
        </div>
        <div className="footer-center">
          <div>
            <span className="centerText">Contact Us</span>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>1/7 Alek, Manukian St,</span>
              Yerevan 0070
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+374 00 00 00 00</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                silver-stone@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Our online shop allows you to shop by intentions,<br/> such as Love &
            Friendship, Serenity & Calmness and <br/> many more! Each intention
            gathers a selection of <br/> gemstones to attract a specific energy. 
          </p>
          <div className="social">
            <a className="link facebook" target="_parent" href="faebook.com">
              <span className="fa fa-facebook-square"></span>
            </a>
            <a className="link twitter" target="_parent" href="titter.com">
              <span className="fa fa-twitter"></span>
            </a>
            <a className="link instagram" target="_parent" href="instagram.com">
              <span className="fa fa-instagram"></span>
            </a>
            <a className="link youtube" target="_parent" href="youtube.com">
              <span className="fa fa-youtube"></span>
            </a>
            <a className="link linkedin" target="_parent" href="linkedin.com">
              <span className="fa fa-linkedin"></span>
            </a>
            <a className="link pinterest" target="_parent" href="pinterest.com">
              <span className="fa fa-pinterest"></span>
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;