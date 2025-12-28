'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [theme, setTheme] = useState('dark');
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const body = document.body;
        if (theme === 'light') {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const setColor = (color: string) => {
        const root = document.documentElement;
        switch (color) {
            case 'purple':
                root.style.setProperty('--first-hue', '250');
                root.style.setProperty('--sat', '66%');
                root.style.setProperty('--lig', '75%');
                break;
            case 'pink':
                root.style.setProperty('--first-hue', '340');
                root.style.setProperty('--sat', '82%');
                root.style.setProperty('--lig', '80%');
                break;
            case 'orange':
                root.style.setProperty('--first-hue', '14');
                root.style.setProperty('--sat', '100%');
                root.style.setProperty('--lig', '64%');
                break;
            case 'blue':
                root.style.setProperty('--first-hue', '207');
                root.style.setProperty('--sat', '90%');
                root.style.setProperty('--lig', '72%');
                break;
            case 'bluegray':
                root.style.setProperty('--first-hue', '201');
                root.style.setProperty('--sat', '15%');
                root.style.setProperty('--lig', '62%');
                break;
        }
    };

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link href="/" className="nav__logo">MUHAMMED SAHAL TK</Link>

                <div>
                    <i className="bx bx-brush change__color change__purple" onClick={() => setColor('purple')}></i>
                    <i className="bx bx-brush change__color change__pink" onClick={() => setColor('pink')}></i>
                    <i className="bx bx-brush change__color change__orange" onClick={() => setColor('orange')}></i>
                    <i className="bx bx-brush change__color change__blue" onClick={() => setColor('blue')}></i>
                    <i className="bx bx-brush change__color change__bluegray" onClick={() => setColor('bluegray')}></i>
                </div>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveLink('#home')} className={`nav__link ${activeLink === '#home' ? 'active-link' : ''}`}>
                                <i className="bx bx-home-alt"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveLink('#about')} className={`nav__link ${activeLink === '#about' ? 'active-link' : ''}`}>
                                <i className="bx bx-user"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveLink('#skills')} className={`nav__link ${activeLink === '#skills' ? 'active-link' : ''}`}>
                                <i className="bx bx-book"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" onClick={() => setActiveLink('#work')} className={`nav__link ${activeLink === '#work' ? 'active-link' : ''}`}>
                                <i className="bx bx-briefcase-alt-2"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveLink('#contact')} className={`nav__link ${activeLink === '#contact' ? 'active-link' : ''}`}>
                                <i className="bx bx-message-square-detail"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'} change-theme`} id="theme-button" onClick={toggleTheme}></i>
            </nav>
        </header>
    );
};

export default Header;
