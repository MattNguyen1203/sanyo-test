import { cn } from "@/lib/utils"

export default function BreadcrumbContainer({children, className}) {
  return (
    <div
      className={cn(
        'flex flex-row flex-nowrap [&_a]:mr-1.5 md:[&_a]:mr-2 pt-4 md:pt-8 overflow-clip',
        className,
      )}
    >
      {children}
    </div>
  )
}
