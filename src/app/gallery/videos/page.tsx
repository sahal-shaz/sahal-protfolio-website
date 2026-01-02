"use client";
import React, { useState, useEffect } from "react";
import { GalleryFilters } from "@/components/gallery/GalleryFilters";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { videos, filters } from "@/utils/videos.json";

interface VideoItem {
    type: "video";
    category: string;
    thumb: string;
    videoSrc: string;
    title: string;
    category_label: string;
    orientation?: "portrait" | "landscape";
}

export default function VideosPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash && filters.some(f => f.id === hash)) {
            setActiveFilter(hash);
        }
    }, [filters]);

    const filteredVideos = activeFilter === 'all'
        ? (videos as VideoItem[])
        : (videos as VideoItem[]).filter(video => video.category === activeFilter);

    return (
        <div className="pb-20">
            <GalleryFilters
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />
            <ParallaxScroll items={filteredVideos as any} />
        </div>
    );
}
