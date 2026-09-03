import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type MarqueeProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  duration?: number
  className?: string
}

function Marquee<T>({
  items,
  renderItem,
  duration = 30,
  className,
}: MarqueeProps<T>) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="marquee-track flex w-max items-center gap-10"
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((item, index) => (
          <div key={`a-${index}`} className="shrink-0">
            {renderItem(item, index)}
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`b-${index}`} className="shrink-0" aria-hidden="true">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  )
}

export { Marquee }
