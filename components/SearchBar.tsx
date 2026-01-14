"use client"

export default function SearchBar() {
    return (
        <div className="bg-white rounded-xl shadow p-4 grid grid-cols-1 md:grid-cols-4 gap-3">
            <input className="input" placeholder="Куда" />
            <input className="input" placeholder="Когда" />
            <input className="input" placeholder="Тип тура" />
            <button className="bg-blue-600 text-white rounded-lg px-4">
                Найти тур
            </button>
        </div>
    )
}