/**
 *
 * Footer
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Container } from "reactstrap";

import Newsletter from "../../containers/Newsletter";

const Footer = () => {
  const infoLinks = [{ id: 0, name: "Contact Us", to: "/contact" }];

  const footerBusinessLinks = (
    <ul className="support-links">
      <li className="footer-link">
        <Link to="/dashboard">Account Details</Link>
      </li>
      <li className="footer-link">
        <Link to="/dashboard/orders">Orders</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map((item) => (
    <li key={item.id} className="footer-link">
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-block">
            <div className="block-title">
              <h2>Customer Service</h2>
            </div>
            <div className="block-content">
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className="footer-block">
            <div className="block-title">
              <h2>Links</h2>
            </div>
            <div className="block-content">
              <a href="https://www.facebook.com/bijikastore" target="_blank">
                <ul>
                  <i class="fab fa-facebook-f"></i> Facebook
                </ul>
              </a>
              <a href="https://www.instagram.com/bijikastore" target="_blank">
                <ul>
                  <i class="fab fa-instagram"></i> Instagram
                </ul>
              </a>

              <a href="https://twitter.com/BijikaEnterpri1" target="_blank">
                <ul>
                  <i class="fab fa-twitter"></i> Twitter
                </ul>
              </a>

              <a href="https://www.pinterest.com/bijikastore" target="_blank">
                <ul>
                  <i class="fab fa-pinterest-p"></i> Pinterest
                </ul>
              </a>

              <a href="https://www.tiktok.com/@bijikastore" target="_blank">
                <ul>
                  <i class="fab fa-tiktok"></i> TikTok
                </ul>
              </a>
            </div>
          </div>
          <div className="footer-block">
            <div className="block-title">
              <h2>Newsletter</h2>
              <Newsletter />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span>?? {new Date().getFullYear()} Bijika Closet </span>
          <br />
          <br />
          <div>
            A Collaborative project by{" "}
            <a href="http://www.aidataron.com/">AiDataRon</a>
          </div>
        </div>

        {/* <ul className="footer-social-item">
          <li>
            <a href="/#facebook" rel="noreferrer noopener" target="_blank">
              <span className="facebook-icon" />
            </a>
          </li>
          <li>
            <a href="/#instagram" rel="noreferrer noopener" target="_blank">
              <span className="instagram-icon" />
            </a>
          </li>
          <li>
            <a href="/#pinterest" rel="noreferrer noopener" target="_blank">
              <span className="pinterest-icon" />
            </a>
          </li>
          <li>
            <a href="/#twitter" rel="noreferrer noopener" target="_blank">
              <span className="twitter-icon" />
            </a>
          </li>
        </ul> */}
      </Container>
    </footer>
  );
};

export default Footer;
