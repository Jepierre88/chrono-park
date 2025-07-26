import { Skeleton } from "@/components/ui/skeleton"

export default function IncomesLoading() {
  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-96" />
      </header>

      <div className="bg-muted/50 p-4 rounded-lg space-y-4">
        <Skeleton className="h-6 w-40" />
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-1">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/10 p-4 rounded-lg space-y-3">
        <Skeleton className="h-5 w-32" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-20 rounded-full" />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-40" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted/50 p-4 border-b">
            <div className="grid grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>

          {Array.from({ length: 8 }).map((_, rowIndex) => (
            <div key={rowIndex} className="p-4 border-b last:border-b-0">
              <div className="grid grid-cols-6 gap-4">
                {Array.from({ length: 6 }).map((_, colIndex) => (
                  <Skeleton key={colIndex} className="h-4 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-40" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-20" />
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-8" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-4 w-48" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
