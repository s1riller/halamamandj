import TourCard from "@/components/TourCard"
import { tours } from "@/data/tours"

export default function ToursSection() {
    return (

        <section className="my-16 max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Популярные туры
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tours.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </section>

    )
}
