import { cn } from "@/lib/utils"

interface LoadingSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function LoadingSkeleton({ className, ...props }: LoadingSkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
      {...props}
    />
  )
}

export function BlogPostSkeleton() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <LoadingSkeleton className="h-6 w-[90%]" />
        <div className="flex gap-2">
          <LoadingSkeleton className="h-4 w-20" />
          <LoadingSkeleton className="h-4 w-20" />
        </div>
      </div>
      <LoadingSkeleton className="h-24 w-full" />
      <div className="flex gap-2">
        <LoadingSkeleton className="h-6 w-16 rounded-full" />
        <LoadingSkeleton className="h-6 w-16 rounded-full" />
        <LoadingSkeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  )
} 