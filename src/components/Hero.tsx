import React from 'react';

const Hero = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__greeting">Hello, I'm</span>
                    <h1 className="home__name">MUHAMMED SAHAL TK</h1>
                    <h3 className="home__education">PHOTOGRAPHER / VIDEOGRAPHER / EDITOR</h3>

                    <div className="home__buttons">
                        <a download="" href="/assets/pdf/photographer-muhammed-sahal-tk.pdf" className="button button--ghost">
                            Download CV
                        </a>
                        <a href="#about" className="button">About me</a>
                    </div>
                </div>

                <div className="home__handle">
                    <img src="/assets/img/Me.jpg" alt="Muhammed Sahal TK" className="home__img" style={{ width: '500px' }} />
                </div>

                <div className="home__social">
                    <a href="https://www.linkedin.com/in/sahalshaz111?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="home__social-link">
                        <i className="bx bxl-linkedin-square"></i>
                    </a>
                    <a href="http://wa.me/+971567264936" target="_blank" rel="noreferrer" className="home__social-link">
                        <i className="bx bxl-whatsapp"></i>
                    </a>
                </div>

                <a href="#about" className="home__scroll">
                    <i className="bx bx-mouse home__scroll-icon"></i>
                    <span className="home__scroll-name">Scroll Down</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
