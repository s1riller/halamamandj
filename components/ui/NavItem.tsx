import Link from "next/link"

interface NavItemProps {
    href: string
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export default function NavItem({
    href,
    children,
    onClick,
    className = ""
}: NavItemProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`py-3 px-4 text-white ${className}`}
        >
            {children}
        </Link>
    )
}