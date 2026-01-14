import Link from "next/link"
import { Button } from "@/components/ui/Button"
export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                <Link href={"/"} className="font-bold text-xl text-blue-600">
                    BaikalTravel
                </Link>

                <nav className="flex gap-6 text-sm">
                    <Link href={"/tours"}>Туры</Link>
                    <Link href={"routes"}>Маршруты</Link>
                    <Link href={"/about"}>О нас</Link>
                </nav>
            </div>
        </header>
    )
}