"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface Filter {
    id: string;
    label: string;
}

interface GalleryFiltersProps {
    filters: Filter[];
    activeFilter: string;
    onFilterChange: (id: string) => void;
}

export const GalleryFilters = ({ filters, activeFilter, onFilterChange }: GalleryFiltersProps) => {
    return (
        <div className="gallery-filters-wrapper sticky top-[80px] z-50">
            <div className="gallery-filters-container">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => onFilterChange(filter.id)}
                        className={cn(
                            "gallery-filter-btn",
                            activeFilter === filter.id && "active"
                        )}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
            <div className="gallery-filters-divider" />
        </div>
    );
};
