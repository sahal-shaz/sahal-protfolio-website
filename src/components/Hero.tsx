'use client';

import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const Hero = () => {
    return (
        <section className="home section relative overflow-hidden" id="home">
            <div className="home__container container grid relative z-10">
                <div className="home__data">
                    <span className="home__greeting">Hello, I'm</span>
                    <TextGenerateEffect
                        words="MUHAMMED SAHAL TK"
                        className="home__name font-bold text-4xl md:text-6xl text-white mb-4"
                    />
                    <h3 className="home__education mt-4">PHOTOGRAPHER / VIDEOGRAPHER / EDITOR</h3>

                    <div className="home__buttons">
                        <a download="" href="assets/pdf/MUHAMMED SAHAL T K Videographer (1).pdf" className="button button--ghost">
                            Download CV
                        </a>
                        <a href="#about" className="button">About me</a>
                    </div>
                </div>

                <div className="home__handle">
                    <img src="/assets/img/me.jpg" alt="Muhammed Sahal TK" className="home__img" style={{ width: '500px' }} />
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
            {/* <BackgroundBeams /> */}
        </section>
    );
};

export default Hero;
