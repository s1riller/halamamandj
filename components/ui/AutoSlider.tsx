"use client"

import { useState, useEffect } from "react"

type SliderProps = {
    images: string[]
    interval?: number
}

export default function AutoSlider({ images, interval = 3000 }: SliderProps) {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, interval)
        return () => clearInterval(timer)
    }, [images.length, interval])

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`slide-${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}`}
                />
            ))}

        </div>
    )
}
