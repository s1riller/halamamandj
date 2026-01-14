import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover-visible:border-ring hover-visible:ring-ring/50 hover-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 hover-visible:ring-destructive/20 dark:hover-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
                orange:
                    "bg-gradient-to-b from-orange-400 to-red-500 text-white font-semibold hover:from-orange-400 hover:to-orange-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200",
                blue:
                    "bg-gradient-to-b from-sky-300 to-blue-600 text-white font-semibold hover:from-blue-400 hover:to-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
                // Кастомные размеры без фиксированной высоты
                "p-sm": "py-2 px-4",
                "p-md": "py-3 px-6",
                "p-lg": "py-4 px-8",
                "p-xl": "py-5 px-10",
                "p-custom": "", // без предустановленных padding
            },
            padding: {
                none: "",
                sm: "py-2 px-4",
                md: "py-3 px-6",
                lg: "py-4 px-8",
                xl: "py-5 px-10",
                "2xl": "py-6 px-12",
                "icon-sm": "p-2",
                "icon-md": "p-3",
                "icon-lg": "p-4",
            },
            rounded: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                full: "rounded-full",
            },
        },
        compoundVariants: [
            // Для кастомных вариантов устанавливаем автоматически rounded-full
            {
                variant: ["orange", "blue"],
                rounded: undefined,
                className: "rounded-full",
            },
            // Автоматический gap для кнопок с иконками
            {
                variant: ["orange", "blue"],
                className: "gap-3",
            },
        ],
        defaultVariants: {
            variant: "default",
            size: "default",
            padding: undefined,
            rounded: "md",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "icon-sm" | "icon-md" | "icon-lg"
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full"
}

export default function Button({
    className,
    variant = "default",
    size = "default",
    padding,
    rounded = "md",
    asChild = false,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            data-padding={padding}
            data-rounded={rounded}
            className={cn(buttonVariants({ variant, size, padding, rounded, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }