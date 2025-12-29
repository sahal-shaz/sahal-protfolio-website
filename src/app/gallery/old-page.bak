'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GalleryItem = ({ type, category, src, videoSrc, thumb, title }: any) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (type === 'video') {
        return (
            <div className={`work__card mix ${category}`}>
                <div className={`video-box-drive ${isPlaying ? 'playing' : ''}`} onClick={() => setIsPlaying(true)}>
                    <img src={thumb} className="video-thumb" alt={title} />
                    <div className="thumb-overlay">
                        <div className="thumb-play-icon"></div>
                    </div>
                    {isPlaying && (
                        <iframe
                            src={`${videoSrc}${videoSrc.includes('?') ? '&' : '?'}autoplay=1`}
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <h3 className="work__title">{title}</h3>
            </div>
        );
    }

    return (
        <div className={`work__card mix ${category}`}>
            <img src={src} alt={title} className="work__img" loading="lazy" />
            <h3 className="work__title">{title}</h3>
        </div>
    );
};

const GalleryPage = () => {
    const [filter, setFilter] = useState('auto-reels');

    const items = [
        // Automotive Reels
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t.png', videoSrc: 'https://drive.google.com/file/d/1CR8ujgIVyIZkyqst5fwCEaCAvuM4xOi8/preview', title: 'Automotive Reel 1' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t2.png', videoSrc: 'https://drive.google.com/file/d/1O2ONWEGsDH_GmSOAkuITfJJ-ETkMyDug/preview', title: 'Automotive Reel 2' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t3.png', videoSrc: 'https://drive.google.com/file/d/11e4RLR_W-9tQIAM8r_QFaVIdNJxs2K-F/preview', title: 'Automotive Reel 3' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t4.png', videoSrc: 'https://drive.google.com/file/d/17gGFiLwvt740DQoXrgyO2GjecM9n17UR/preview', title: 'Automotive Reel 4' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t5.png', videoSrc: 'https://drive.google.com/file/d/1qjecuBMo3gVEmnK1PohIvln_H3IQG6rJ/preview', title: 'Automotive Reel 5' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t6.png', videoSrc: 'https://drive.google.com/file/d/1J_5HZO3alWnIRJFowVRMuD6TUxiMKusZ/preview', title: 'Automotive Reel 6' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t7.png', videoSrc: 'https://drive.google.com/file/d/1qezxxKaUPxIWBFFg9yda7qTM9He5_uYj/preview', title: 'Automotive Reel 7' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t8.png', videoSrc: 'https://drive.google.com/file/d/1y1h0GQttGBphf8ow7UX0QfhrrL2j2OOy/preview', title: 'Automotive Reel 8' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t9.png', videoSrc: 'https://drive.google.com/file/d/10M6mjw4GKJ1RQO7eEjeIHMZkkZ1mswHf/preview', title: 'Automotive Reel 9' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t10.png', videoSrc: 'https://drive.google.com/file/d/10M6mjw4GKJ1RQO7eEjeIHMZkkZ1mswHf/preview', title: 'Automotive Reel 10' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/auto thumb/t11.png', videoSrc: 'https://drive.google.com/file/d/1L8zJRxGy0znroZNzWS-VqOZN8JeImAhH/preview', title: 'Automotive Reel 11' },
        { type: 'video', category: 'auto-reels', thumb: '/assets/img/t13.png', videoSrc: 'https://drive.google.com/file/d/1fCZeDM3b6OK3cARkIKZ4K_Dii05RgCUV/preview', title: 'Automotive Reel 12' },

        // Automotive Photos
        { type: 'image', category: 'auto-photos', src: '/assets/img/automotive pic/automotive1.webp', title: 'Automotive Photo' },
        { type: 'image', category: 'auto-photos', src: '/assets/img/automotive pic/automotive2.webp', title: 'Automotive Photo' },
        { type: 'image', category: 'auto-photos', src: '/assets/img/automotive pic/automotive3.webp', title: 'Automotive Photo' },
        { type: 'image', category: 'auto-photos', src: '/assets/img/automotive pic/automotive4.webp', title: 'Automotive Photo' },
        { type: 'image', category: 'auto-photos', src: '/assets/img/automotive pic/automotive5.webp', title: 'Automotive Photo' },
        { type: 'image', category: 'auto-photos', src: '/assets/img/automotive pic/automotive6.webp', title: 'Automotive Photo' },

        // Content Reels
        { type: 'video', category: 'content-reels', thumb: '/assets/img/auto thumb/c1.png', videoSrc: 'https://drive.google.com/file/d/1rSM7kGVxIddFu8SSZLa3xRmr1xz4q33K/preview', title: 'Content Creation' },
        { type: 'video', category: 'content-reels', thumb: '/assets/img/auto thumb/c2.png', videoSrc: 'https://drive.google.com/file/d/14R2tEb_t091IakDebLzfYDJnCSiqHQtM/preview', title: 'Content Creation' },
        { type: 'video', category: 'content-reels', thumb: '/assets/img/auto thumb/c3.png', videoSrc: 'https://drive.google.com/file/d/1y-xMzv877IH7VqGo9ergU6GqG_y1127O/preview', title: 'Content Creation' },

        // Real Estate Reels
        { type: 'video', category: 're-reels', thumb: '/assets/img/auto thumb/c13.png', videoSrc: 'https://drive.google.com/file/d/10dBWkx0Je27G6kQjU5SNbk4bC1HAFQ0n/preview', title: 'Real Estate Reel' },
        { type: 'video', category: 're-reels', thumb: '/assets/img/r1.png', videoSrc: 'https://drive.google.com/file/d/1qxUAexBkBvDM-peh3TQRTB_E6Mg-nyFl/preview', title: 'Real Estate Reel' },
        { type: 'video', category: 're-reels', thumb: '/assets/img/r5.png', videoSrc: 'https://drive.google.com/file/d/1rvMtXiahOgtuB2S_nIC9BuMSBlG2eJHL/preview', title: 'Real Estate Reel' },

        // Real Estate Photos
        { type: 'image', category: 're-photos', src: '/assets/img/rpic10.webp', title: 'Real Estate Photo' },
        { type: 'image', category: 're-photos', src: '/assets/img/rpic8.webp', title: 'Real Estate Photo' },
        { type: 'image', category: 're-photos', src: '/assets/img/rpic26.webp', title: 'Real Estate Photo' },

        // Wedding Reels
        { type: 'video', category: 'wed-reels', thumb: '/assets/img/w1.png', videoSrc: 'https://drive.google.com/file/d/12FbB1fQgaJFD1SPXbExKnSVcRneCTTQ0/preview', title: 'Wedding Reel' },
        { type: 'video', category: 'wed-reels', thumb: '/assets/img/w2.png', videoSrc: 'https://drive.google.com/file/d/1bPcOrOq-CAlIUTnmJcmIaWGC0dzUcBbN/preview', title: 'Wedding Reel' },
        { type: 'video', category: 'wed-reels', thumb: '/assets/img/w3.png', videoSrc: 'https://drive.google.com/file/d/1D52_744kKNf3adeRVMPRdy7tRke-jMy7/preview', title: 'Wedding Reel' },
    ];

    const filteredItems = items.filter(item => item.category === filter);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setFilter(hash);
        }
    }, []);

    const filters = [
        { id: 'auto-reels', label: 'Automotive Reels' },
        { id: 'auto-photos', label: 'Automotive Photos' },
        { id: 'content-reels', label: 'Content Creation' },
        { id: 're-reels', label: 'Real Estate Reels' },
        { id: 're-photos', label: 'Real Estate Photos' },
        { id: 'wed-reels', label: 'Wedding/Model Reels' },
        { id: 'wed-photos', label: 'Wedding/Model Photos' },
        { id: 'food-reels', label: 'Food/Prod Reels' },
        { id: 'food-photos', label: 'Food/Prod Photos' },
        { id: 'event-reels', label: 'Event/Com Reels' },
        { id: 'event-photos', label: 'Event/Com Photos' },
    ];

    return (
        <>
            <Header />
            <main className="main">
                <section className="work section work-page-padding" id="work">
                    <span className="section__subtitle">My Portfolio</span>
                    <h2 className="section__title">All Projects Gallery</h2>

                    <div className="work__filters">
                        {filters.map(f => (
                            <span
                                key={f.id}
                                className={`work__item ${filter === f.id ? 'active-work' : ''}`}
                                onClick={() => setFilter(f.id)}
                            >
                                {f.label}
                            </span>
                        ))}
                    </div>

                    <div className="work__container container grid">
                        {filteredItems.map((item, index) => (
                            <GalleryItem key={index} {...item} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default GalleryPage;
