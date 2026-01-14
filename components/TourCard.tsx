type Tour = {
    id: string
    title: string
    image: string
    description: string
}

type TourCardProps = {
    tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
            <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{tour.title}</h3>
                <p className="text-sm text-gray-600">{tour.description}</p>
            </div>
        </div>
    )
}
