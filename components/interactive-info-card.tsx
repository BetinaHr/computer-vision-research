"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ChevronRight, PlayCircle } from "lucide-react"

type InteractiveInfoCardProps = {
  icon: any
  title: string
  description: string
  details: string
  bullets?: string[]
  tags?: string[]
  image?: string
  embedUrl?: string
  numberLabel?: string
}

export function InteractiveInfoCard({
  icon: Icon,
  title,
  description,
  details,
  bullets = [],
  tags = [],
  image,
  embedUrl,
  numberLabel,
}: InteractiveInfoCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative min-h-[290px] w-full overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
      >
        {numberLabel && (
          <div className="absolute right-5 top-5 z-10 text-5xl font-bold text-muted/20 transition-opacity duration-300 group-hover:opacity-0">
            {numberLabel}
          </div>
        )}

        <div className="relative z-10 transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          <h3 className="mb-3 text-lg font-semibold text-foreground">
            {title}
          </h3>

          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            Виж повече
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        <div className="absolute inset-0 z-20 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/30 via-primary/10 to-background" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <PlayCircle className="h-4 w-4" />
              Кликни за видео и повече информация
            </div>

            <h3 className="mb-2 text-xl font-semibold text-foreground">
              {title}
            </h3>

            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {details}
            </p>
          </div>
        </div>
      </button>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {embedUrl && (
            <div className="aspect-video overflow-hidden rounded-xl border border-border">
              <iframe
                src={embedUrl}
                title={title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <p className="leading-relaxed text-muted-foreground">{details}</p>

          {bullets.length > 0 && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                Основни акценти
              </h4>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
