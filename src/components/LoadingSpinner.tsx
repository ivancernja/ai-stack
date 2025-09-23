interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 border-2 border-[#E5E5E5] rounded-full"></div>
        <div className="absolute inset-0 border-2 border-[#22C55E] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export function LoadingSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-shimmer bg-[#F5F5F5] rounded ${className}`}></div>
  )
}