"use client"

import { useState } from "react"
import { Play, ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react"
import Image from "next/image" // Импортируем компонент Image из Next.js
import YandexMapRoute from "./GalleryMapCard"
import GalleryMapCard from "./GalleryMapCard"

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

    const images = [
        {
            id: 1,
            src: "/imgs/gallery/bus-1.jpg",
            fallbackSrc: "/images/default-bus.jpg", // Запасное изображение
            alt: "Комфортабельный автобус",
            category: "Транспорт"
        },
        {
            id: 2,
            src: "/imgs/gallery/fish.png",
            fallbackSrc: "/images/default-accommodation.jpg",
            alt: "Пейзажи Байкала",
            category: "Фотографии"
        },

        {
            id: 3,
            src: "/imgs/gallery/uha.png",
            fallbackSrc: "/images/default-landscape.jpg",
            alt: "Пейзажи Байкала",
            category: "Еда"
        },
        {
            id: 4,
            src: "/gallery/video-thumb.jpg",
            fallbackSrc: "/images/default-video.jpg",
            alt: "Видео обзор",
            category: "Видео",
            isVideo: true
        },
    ]

    const handleImageError = (id: number) => {
        setImageErrors(prev => ({ ...prev, [id]: true }))
    }

    const getImageSrc = (image: typeof images[0]) => {
        return imageErrors[image.id] ? image.fallbackSrc : image.src
    }

    return (
        <section className="to-slate-50 my-16 max-w-7xl mx-auto px-4">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
                    Фото и видео с наших туров
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <GalleryMapCard />
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="relative rounded-xl overflow-hidden cursor-pointer group aspect-square"
                            onClick={() => setSelectedImage(image.id)}
                        >
                            {/* Используем тег img вместо div */}
                            {!image.isVideo ? (
                                <>
                                    <img
                                        src={getImageSrc(image)}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        onError={() => handleImageError(image.id)}
                                        loading="lazy"
                                    />

                                    {/* Если изображение не загрузилось, показываем иконку */}
                                    {imageErrors[image.id] && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-200">
                                            <ImageIcon className="w-12 h-12 text-slate-400 mb-2" />
                                            <span className="text-slate-600 text-sm text-center px-2">
                                                {image.alt}
                                            </span>
                                        </div>
                                    )}

                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                        <div className="text-sm font-medium">{image.category}</div>
                                        <div className="text-xs opacity-90">{image.alt}</div>
                                    </div>
                                </>
                            ) : (
                                <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-900">
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                                        <Play className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                        <div className="text-sm font-medium">{image.category}</div>
                                        <div className="text-xs opacity-90">{image.alt}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Модальное окно для просмотра */}
                {selectedImage !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative max-w-4xl w-full">
                            <div className="bg-white rounded-xl overflow-hidden">
                                <img
                                    src={getImageSrc(images.find(img => img.id === selectedImage)!)}
                                    alt={images.find(img => img.id === selectedImage)?.alt || "Изображение"}
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                />
                            </div>

                            <div className="flex justify-between mt-4">
                                <button
                                    className="text-white p-2 hover:bg-white/20 rounded-full"
                                    onClick={() => {
                                        const currentIndex = images.findIndex(img => img.id === selectedImage)
                                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
                                        setSelectedImage(images[prevIndex].id)
                                    }}
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    className="text-white p-2 hover:bg-white/20 rounded-full"
                                    onClick={() => {
                                        const currentIndex = images.findIndex(img => img.id === selectedImage)
                                        const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
                                        setSelectedImage(images[nextIndex].id)
                                    }}
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}