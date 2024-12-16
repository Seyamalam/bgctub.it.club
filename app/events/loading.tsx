import { LoadingSkeleton } from "@/components/ui/loading-skeleton"

export default function LoadingEvents() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl text-center">
        <LoadingSkeleton className="h-10 w-3/4 mx-auto mb-4" />
        <LoadingSkeleton className="h-6 w-2/3 mx-auto" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {[...Array(3)].map((_, i) => (
          <LoadingSkeleton key={i} className="aspect-[4/3] rounded-lg" />
        ))}
      </div>
    </div>
  )
} 