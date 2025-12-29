"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { MediaModal } from "@/components/gallery/MediaModal";

interface GalleryItem {
    type: 'image' | 'video';
    src?: string;
    videoSrc?: string;
    thumb?: string;
    title: string;
    category: string;
}

export const ParallaxScroll = ({
    items,
    className,
}: {
    items: GalleryItem[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Use window scroll but target this specific grid's progress through the viewport
    const { scrollYProgress } = useScroll({
        target: gridRef,
        offset: ["start end", "end start"],
    });

    // Adjust these values to make the parallax more or less intense
    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const quarter = Math.ceil(items.length / 4);

    const firstPart = items.slice(0, quarter);
    const secondPart = items.slice(quarter, 2 * quarter);
    const thirdPart = items.slice(2 * quarter, 3 * quarter);
    const fourthPart = items.slice(3 * quarter);

    const handleItemClick = (item: GalleryItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className={cn("gallery-scroll-container", className)} ref={gridRef}>
                <div className="gallery-grid">
                    <div className="gallery-column">
                        {firstPart.map((el, idx) => (
                            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                                <GalleryCard item={el} onClick={() => handleItemClick(el)} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="gallery-column">
                        {secondPart.map((el, idx) => (
                            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                                <GalleryCard item={el} onClick={() => handleItemClick(el)} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="gallery-column">
                        {thirdPart.map((el, idx) => (
                            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                                <GalleryCard item={el} onClick={() => handleItemClick(el)} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="gallery-column">
                        {fourthPart.map((el, idx) => (
                            <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
                                <GalleryCard item={el} onClick={() => handleItemClick(el)} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <MediaModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                item={selectedItem}
            />
        </>
    );
};

const GalleryCard = ({ item, onClick }: { item: GalleryItem; onClick: () => void }) => {
    return (
        <div className="gallery-card" onClick={onClick}>
            <div className="gallery-card-container">
                {item.type === 'image' ? (
                    <img
                        src={item.src}
                        className="gallery-card-media"
                        alt={item.title}
                    />
                ) : (
                    <div className="relative h-full w-full">
                        <img
                            src={item.thumb}
                            className="gallery-card-media"
                            alt={item.title}
                        />
                        <div className="gallery-video-overlay">
                            <div className="gallery-play-btn">
                                <div className="gallery-play-icon"></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="gallery-card-info">
                    <p className="gallery-card-category">
                        {item.category.replace('-', ' ')}
                    </p>
                    <h4 className="gallery-card-title">
                        {item.title}
                    </h4>
                </div>
            </div>
        </div>
    );
};
