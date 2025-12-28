import React from 'react';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <span className="section__subtitle">My abilities</span>
            <h2 className="section__title">My Experience</h2>

            <div className="skills__container container grid">
                <div className="skills__content">
                    <h3 className="skills__title">Video Editing Software</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">DaVinci Resolve</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Premiere Pro</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                        </div>

                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">After Effects</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">CapCut</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title">Photo Editing Software</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Lightroom</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Photoshop</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                        </div>

                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Canva</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className="bx bxs-badge-check"></i>
                                <div>
                                    <h3 className="skills__name">Topaz</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
