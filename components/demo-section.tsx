"use client"

import { useEffect, useRef, useState } from "react"
import * as cocoSsd from "@tensorflow-models/coco-ssd"
import "@tensorflow/tfjs"

type Prediction = {
  bbox: [number, number, number, number]
  class: string
  score: number
}

export function DemoSection() {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null)
  const [isModelLoading, setIsModelLoading] = useState(true)
  const [isDetecting, setIsDetecting] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [predictions, setPredictions] = useState<Prediction[]>([])

  useEffect(() => {
    const loadModel = async () => {
      setIsModelLoading(true)

      const loadedModel = await cocoSsd.load({
        base: "mobilenet_v2",
      })

      setModel(loadedModel)
      setIsModelLoading(false)
    }

    loadModel()
  }, [])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const url = URL.createObjectURL(file)

    setImageUrl(url)
    setPredictions([])

    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  const detectObjects = async () => {
    if (!model || !imageRef.current || !canvasRef.current) return

    setIsDetecting(true)

    const image = imageRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    if (!ctx) {
      setIsDetecting(false)
      return
    }

    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight

    const detectedObjects = await model.detect(image)

    const filteredObjects = detectedObjects.filter(
      (prediction) => prediction.score >= 0.5
    ) as Prediction[]

    setPredictions(filteredObjects)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    filteredObjects.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox

      ctx.lineWidth = 4
      ctx.strokeStyle = "#00e0b8"
      ctx.fillStyle = "#00e0b8"
      ctx.font = "22px Arial"

      ctx.strokeRect(x, y, width, height)

      const label = `${prediction.class} ${Math.round(prediction.score * 100)}%`

      const textWidth = ctx.measureText(label).width
      const textHeight = 28

      ctx.fillRect(x, y > textHeight ? y - textHeight : y, textWidth + 12, textHeight)

      ctx.fillStyle = "#00110f"
      ctx.fillText(label, x + 6, y > textHeight ? y - 7 : y + 21)
    })

    setIsDetecting(false)
  }

  return (
    <section id="демо" className="scroll-mt-28 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Демо
          </span>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Разпознаване на обекти от снимка
          </h2>

          <p className="text-muted-foreground">
            Качи изображение, а AI моделът ще анализира снимката и ще покаже
            какви обекти открива в нея.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <label className="cursor-pointer rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                Качи снимка
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              <button
                onClick={detectObjects}
                disabled={!imageUrl || !model || isModelLoading || isDetecting}
                className="rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/60 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isModelLoading
                  ? "Зареждане на модела..."
                  : isDetecting
                    ? "Анализиране..."
                    : "Разпознай обекти"}
              </button>
            </div>

            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-xl border border-border bg-background">
              {imageUrl ? (
                <>
                  <img
                    ref={imageRef}
                    src={imageUrl}
                    alt="Качена снимка"
                    onLoad={() => {
                      const canvas = canvasRef.current
                      const ctx = canvas?.getContext("2d")
                      if (canvas && ctx && imageRef.current) {
                        canvas.width = imageRef.current.naturalWidth
                        canvas.height = imageRef.current.naturalHeight
                        ctx.clearRect(0, 0, canvas.width, canvas.height)
                      }
                    }}
                    className="max-h-[560px] w-full object-contain"
                  />

                  <canvas
                    ref={canvasRef}
                    className="absolute left-0 top-0 h-full w-full object-contain"
                  />
                </>
              ) : (
                <div className="px-6 text-center">
                  <p className="text-muted-foreground">
                    Все още няма качена снимка.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Пробвай със снимка на човек, лаптоп, телефон, книга, бутилка,
                    чаша, куче, котка или автомобил.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Резултати
            </h3>

            {!imageUrl && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                Качи снимка и натисни „Разпознай обекти“, за да видиш резултатите.
              </p>
            )}

            {imageUrl && predictions.length === 0 && !isDetecting && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                Натисни бутона за разпознаване. Ако няма резултати, моделът
                може да не открива обекти от своите категории в снимката.
              </p>
            )}

            {isDetecting && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                AI моделът анализира изображението...
              </p>
            )}

            {predictions.length > 0 && (
              <div className="space-y-3">
                {predictions.map((prediction, index) => (
                  <div
                    key={`${prediction.class}-${index}`}
                    className="flex items-center justify-between rounded-xl border border-border bg-background p-3"
                  >
                    <span className="font-medium text-foreground">
                      {prediction.class}
                    </span>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {Math.round(prediction.score * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                Какво може да разпознава?
              </h4>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Моделът разпознава често срещани обекти като човек, кола,
                телефон, лаптоп, клавиатура, мишка, книга, бутилка, чаша, стол,
                куче, котка и други.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}