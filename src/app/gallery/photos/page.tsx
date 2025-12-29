"use client";
import React, { useState, useEffect } from "react";
import { GalleryFilters } from "@/components/gallery/GalleryFilters";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { photos, filters } from "@/utils/images.json";

interface PhotoItem {
    type: "image";
    category: string;
    src: string;
    title: string;
    description: string;
}

export default function PhotosPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash && filters.some(f => f.id === hash)) {
            setActiveFilter(hash);
        }
    }, []);

    const filteredPhotos = activeFilter === 'all'
        ? (photos as PhotoItem[])
        : (photos as PhotoItem[]).filter(photo => photo.category === activeFilter);

    return (
        <div className="pb-20">
            <GalleryFilters
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />
            <ParallaxScroll items={filteredPhotos as any} />
        </div>
    );
}
