"use client";

import { useState } from "react";
import Image from "next/image";

interface ScreenshotGalleryProps {
    screenshots: string[];
    title: string;
}

export default function ScreenshotGallery({
    screenshots,
    title,
}: ScreenshotGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!screenshots || screenshots.length === 0) {
        return null;
    }

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? screenshots.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prev) =>
            prev === screenshots.length - 1 ? 0 : prev + 1
        );
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {screenshots.map((screenshot, index) => (
                    <button
                        key={screenshot}
                        onClick={() => openLightbox(index)}
                        className="relative aspect-video bg-neutral-100 rounded overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        <Image
                            src={screenshot}
                            alt={`${title} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            closeLightbox();
                        }}
                        className="absolute top-4 right-4 text-white text-3xl hover:text-neutral-300 cursor-pointer"
                        aria-label="Close lightbox"
                    >
                        &times;
                    </button>

                    {screenshots.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrevious();
                                }}
                                className="absolute left-4 text-white text-4xl hover:text-neutral-300 cursor-pointer"
                                aria-label="Previous screenshot"
                            >
                                &#8249;
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className="absolute right-4 text-white text-4xl hover:text-neutral-300 cursor-pointer"
                                aria-label="Next screenshot"
                            >
                                &#8250;
                            </button>
                        </>
                    )}

                    <div
                        className="relative max-w-[90vw] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={screenshots[currentIndex]}
                            alt={`${title} screenshot ${currentIndex + 1}`}
                            width={1920}
                            height={1080}
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                    </div>

                    <div className="absolute bottom-4 text-white text-sm">
                        {currentIndex + 1} / {screenshots.length}
                    </div>
                </div>
            )}
        </>
    );
}
