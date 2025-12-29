"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MediaModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: {
        type: 'image' | 'video';
        src?: string;
        videoSrc?: string;
        thumb?: string;
        title: string;
        category: string;
    } | null;
}

export const MediaModal = ({ isOpen, onClose, item }: MediaModalProps) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!item) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="media-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="media-modal-container"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="media-modal-close" onClick={onClose}>
                            <i className="bx bx-x"></i>
                        </button>

                        <div className="media-modal-content">
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="media-modal-image"
                                />
                            ) : (
                                <iframe
                                    src={item.videoSrc}
                                    allow="autoplay"
                                    className="media-modal-video"
                                    title={item.title}
                                ></iframe>
                            )}
                        </div>

                        <div className="media-modal-info">
                            <h3 className="media-modal-title">{item.title}</h3>
                            <p className="media-modal-category">
                                {item.category.replace('-', ' ')}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
