import React from 'react';

const About = () => {
    return (
        <section className="about section" id="about">
            <span className="section__subtitle">My Intro</span>
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <img src="/assets/img/about.png" alt="" className="about__img" />

                <div className="about__data">
                    <div className="about__info">
                        <div className="about__box">
                            <i className="bx bx-award about__icon"></i>
                            <h3 className="about__title">Experience</h3>
                            <span className="about__subtitle">3 Years + Working</span>
                        </div>
                        <div className="about__box">
                            <i className="bx bx-briefcase-alt about__icon"></i>
                            <h3 className="about__title">Completed</h3>
                            <span className="about__subtitle">150 + Projects</span>
                        </div>
                        <div className="about__box">
                            <i className="bx bx-support about__icon"></i>
                            <h3 className="about__title">Support</h3>
                            <span className="about__subtitle">Online 24/7</span>
                        </div>
                    </div>

                    <p className="about__description">
                        Very Enthusiastic, Self Motivated, PHOTOGRAPHER specialzed in capturing moments and creating visual stories.
                    </p>

                    <a href="#contact" className="button">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default About;
