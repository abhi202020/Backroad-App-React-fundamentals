import React from "react";
import { pageLink, dataIcon } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLink.map((links) => {
          return (
            <li key={links.id}>
              <a href={links.href} className="footer-link">
                {links.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {dataIcon.map((iconLink) => {
          return (
            <li key={iconLink.id}>
              <a href={iconLink.href} target="_blank" className="footer-icon">
                <i className={iconLink.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()};</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
