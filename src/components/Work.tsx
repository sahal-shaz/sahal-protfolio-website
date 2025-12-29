'use client';

import React, { useState } from 'react';

const VideoCard = ({ id, videoSrc, poster, title, category, galleryId }: { id: string, videoSrc: string, poster: string, title: string, category: string, galleryId: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = document.getElementById(id) as HTMLVideoElement;
        if (video) {
            if (video.paused) {
                video.play();
                video.controls = true;
                setIsPlaying(true);
            } else {
                video.pause();
                video.controls = false;
                setIsPlaying(false);
            }
        }
    };

    return (
        <div className={`work__card mix ${category}`}>
            <div className="video-box">
                <video
                    className="work__video"
                    id={id}
                    poster={poster}
                    playsInline
                    onEnded={() => {
                        const video = document.getElementById(id) as HTMLVideoElement;
                        if (video) {
                            video.controls = false;
                            video.load();
                        }
                        setIsPlaying(false);
                    }}
                    onPause={() => {
                        const video = document.getElementById(id) as HTMLVideoElement;
                        if (video) video.controls = false;
                        setIsPlaying(false);
                    }}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
                <div className={`play-overlay ${isPlaying ? 'hidden' : ''}`} onClick={togglePlay}>
                    <div className="play-circle">
                        <div className="play-triangle"></div>
                    </div>
                </div>
            </div>
            <h3 className="work__title">{title}</h3>
            <a href={`/gallery/videos#${galleryId}`} className="work__button">
                View All <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
        </div>
    );
};

const ImageCard = ({ src, title, category, galleryId }: { src: string, title: string, category: string, galleryId: string }) => {
    return (
        <div className={`work__card mix ${category}`}>
            <div className="video-box">
                <img src={src} alt={title} className="work__video" />
            </div>
            <h3 className="work__title">{title}</h3>
            <a href={`/gallery/photos#${galleryId}`} className="work__button">
                View All <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
        </div>
    );
};

const Work = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        { type: 'video', id: 'webVideo1', videoSrc: '/assets/vediio/topa.MP4', poster: '/assets/img/car main.jpg', title: 'Automotive Reels', category: 'web', galleryId: 'auto-reels' },
        { type: 'image', src: '/assets/img/auto-photo-main.png', title: 'Automotive Photos', category: 'web', galleryId: 'auto-photos' },
        { type: 'video', id: 'mobilVideo', videoSrc: '/assets/vediio/content1.mp4', poster: '/assets/img/ss content.png', title: 'Content Creation', category: 'mobil', galleryId: 'content-reels' },
        { type: 'video', id: 'designVideo', videoSrc: '/assets/vediio/Piano Reel 05 March.mp4', poster: '/assets/img/ss2.png', title: 'Real estate Reels', category: 'design', galleryId: 're-reels' },
        { type: 'image', src: '/assets/img/R1.webp', title: 'Real estate Photos', category: 'design', galleryId: 're-photos' },
        { type: 'video', id: 'design2Video', videoSrc: '/assets/vediio/beforetopazathuliya_1_prob3 2.MP4', poster: '/assets/img/model1.JPG', title: 'Modeling/Weddings Video', category: 'design2', galleryId: 'wed-reels' },
        { type: 'image', src: '/assets/img/ss3.JPG', title: 'Wedding/Modeling Photo', category: 'design2', galleryId: 'wed-photos' },
        { type: 'video', id: 'design3Video', videoSrc: '/assets/vediio/Japonico - Bar Reel.mp4', poster: '/assets/img/ss4.png', title: 'Food/Product Reels', category: 'design3', galleryId: 'food-reels' },
        { type: 'image', src: '/assets/img/ss5.webp', title: 'Food /product Photos', category: 'design3', galleryId: 'food-photos' },
        { type: 'video', id: 'design4Video', videoSrc: '/assets/vediio/event1.mp4', poster: '/assets/img/sj7.jpg', title: 'Event / commerical Reels', category: 'design4', galleryId: 'event-reels' },
        { type: 'image', src: '/assets/img/DSC03132.JPG', title: 'Event / commerical photos', category: 'design4', galleryId: 'event-photos' },
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    return (
        <section className="work section" id="work">
            <span className="section__subtitle">My Portfolio</span>
            <h2 className="section__title">Recent Works</h2>

            <div className="work__filters">
                <span className={`work__item ${filter === 'all' ? 'active-work' : ''}`} onClick={() => setFilter('all')}>All</span>
                <span className={`work__item ${filter === 'web' ? 'active-work' : ''}`} onClick={() => setFilter('web')}>Automotive</span>
                <span className={`work__item ${filter === 'mobil' ? 'active-work' : ''}`} onClick={() => setFilter('mobil')}>Content Creation</span>
                <span className={`work__item ${filter === 'design' ? 'active-work' : ''}`} onClick={() => setFilter('design')}>Real estate</span>
                <span className={`work__item ${filter === 'design2' ? 'active-work' : ''}`} onClick={() => setFilter('design2')}>Wedding / modeling</span>
                <span className={`work__item ${filter === 'design3' ? 'active-work' : ''}`} onClick={() => setFilter('design3')}>Food / product</span>
                <span className={`work__item ${filter === 'design4' ? 'active-work' : ''}`} onClick={() => setFilter('design4')}>Event / commercial</span>
            </div>

            <div className="work__container container grid">
                {filteredProjects.map((p, index) => (
                    p.type === 'video' ? (
                        <VideoCard
                            key={index}
                            id={p.id!}
                            videoSrc={p.videoSrc!}
                            poster={p.poster!}
                            title={p.title}
                            category={p.category}
                            galleryId={p.galleryId}
                        />
                    ) : (
                        <ImageCard
                            key={index}
                            src={p.src!}
                            title={p.title}
                            category={p.category}
                            galleryId={p.galleryId}
                        />
                    )
                ))}
            </div>
        </section>
    );
};

export default Work;
