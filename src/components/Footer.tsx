import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">MUHAMMED SAHAL TK</h1>

                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#work" className="footer__link">Projects</a></li>
                </ul>

                <ul className="footer__social">
                    <a href="https://www.instagram.com/s_a_h_al___?igsh=aXU0aHRmczY4bHRp&utm_source=qr" target="_blank" rel="noreferrer" className="footer__social-link">
                        <i className="bx bxl-instagram"></i>
                    </a>
                </ul>

                <span className="footer__copy">
                    &#169; {new Date().getFullYear()} MUHAMMED SAHAL TK. All rights reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
