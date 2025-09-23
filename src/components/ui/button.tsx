import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = (props: { variant?: "default" | "outline" }) => {
  const { variant = "default" } = props
  
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e7d32] disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
  
  const variants = {
    default: "bg-[#2e7d32] text-white hover:bg-[#1b5e20]",
    outline: "border border-[#e0d6c9] bg-[#f8f5f0] hover:bg-[#f0e9e0] hover:text-[#3e2723]"
  }
  
  return cn(baseClasses, variants[variant])
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }