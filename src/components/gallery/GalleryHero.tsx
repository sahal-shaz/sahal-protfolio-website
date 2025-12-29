"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const GalleryHero = () => {
    const pathname = usePathname();
    const isPhotos = pathname.includes("/gallery/photos");

    return (
        <div className="gallery-hero">
            <div className="gallery-hero-bg-text">
                <span>Portfolio</span>
            </div>

            <div className="gallery-hero-content">
                <span className="gallery-hero-label">Visual Showcase</span>
                <h1 className="gallery-hero-title">Creative Works</h1>
                <p className="gallery-hero-description">
                    {isPhotos
                        ? "Exploring the world through a lens, one frame at a time. A collection of moments, lights, and shadows."
                        : "Stories in motion. Capturing the cinematic essence of life, speed, and architecture."}
                </p>

                <div className="gallery-switch-container">
                    <Link
                        href="/gallery/photos"
                        className={cn("gallery-switch-link", isPhotos && "active")}
                    >
                        Photography
                    </Link>
                    <Link
                        href="/gallery/videos"
                        className={cn("gallery-switch-link", !isPhotos && "active")}
                    >
                        Videography
                    </Link>
                </div>
            </div>
        </div>
    );
};
