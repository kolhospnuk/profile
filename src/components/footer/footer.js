import React from "react";
import './footer.css';

import facebook from "../../img/icons/facebook-circular-logo.svg";
import instagram from "../../img/icons/instagram.svg";
import phone from "../../img/icons/telegram-logo.svg";

const Footer = () => {

    return (
        <div className="footer">
            <ul className="footer-icons">
                <li>
                    <a href="https://www.facebook.com/kolhospnuk"
                       target="_blank">
                        <img src={facebook}
                             className="footer-icons-item"
                             alt="facebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/antokhamomot"
                       target="_blank">
                        <img src={instagram}
                             className="footer-icons-item"
                             alt="instagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/kolhospnuk007"
                       target="_blank">
                        <img src={phone}
                             className="footer-icons-item"
                             alt="telegram"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;
