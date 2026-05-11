"use client"

import { useEffect, useRef, useState } from "react"
import * as cocoSsd from "@tensorflow-models/coco-ssd"
import "@tensorflow/tfjs"

type Prediction = {
  bbox: [number, number, number, number]
  class: string
  score: number
}

export function TensorflowObjectDetectionDemo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null)
  const [isCameraOn, setIsCameraOn] = useState(false)
  const [isModelLoading, setIsModelLoading] = useState(false)
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

  const startCamera = async () => {
    if (!videoRef.current) return

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 640,
        height: 480,
      },
      audio: false,
    })

    videoRef.current.srcObject = stream
    await videoRef.current.play()

    setIsCameraOn(true)
  }

  const stopCamera = () => {
    const video = videoRef.current

    if (video?.srcObject) {
      const stream = video.srcObject as MediaStream
      stream.getTracks().forEach((track) => track.stop())
      video.srcObject = null
    }

    setIsCameraOn(false)
    setPredictions([])

    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  useEffect(() => {
    if (!model || !isCameraOn) return

    let animationFrameId: number

    const detectObjects = async () => {
      const video = videoRef.current
      const canvas = canvasRef.current

      if (!video || !canvas) return

      if (video.readyState === 4) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

const detectedObjects = await model.detect(video)

const filteredObjects = detectedObjects.filter(
  (prediction) => prediction.score >= 0.55
)

setPredictions(filteredObjects as Prediction[])

        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          filteredObjects.forEach((prediction) => {
            const [x, y, width, height] = prediction.bbox

            ctx.lineWidth = 3
            ctx.strokeStyle = "#00e0b8"
            ctx.fillStyle = "#00e0b8"
            ctx.font = "16px Arial"

            ctx.strokeRect(x, y, width, height)

            const label = `${prediction.class} ${Math.round(
              prediction.score * 100
            )}%`

            ctx.fillText(label, x, y > 20 ? y - 8 : y + 18)
          })
        }
      }

      animationFrameId = requestAnimationFrame(detectObjects)
    }

    detectObjects()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [model, isCameraOn])

  return (
    <section id="демо" className="scroll-mt-28 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Демо
          </span>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Object Detection с TensorFlow.js
          </h2>

          <p className="text-muted-foreground">
            Камерата заснема видео в реално време, а TensorFlow.js моделът
            разпознава обекти директно в браузъра.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-6">
          <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-xl border border-border bg-background">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              playsInline
            />

            <canvas
              ref={canvasRef}
              className="absolute left-0 top-0 h-full w-full"
            />

            {!isCameraOn && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                <p className="text-muted-foreground">
                  Натисни бутона, за да стартираш камерата.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {!isCameraOn ? (
              <button
                onClick={startCamera}
                disabled={!model || isModelLoading}
                className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isModelLoading ? "Зареждане на модела..." : "Стартирай камера"}
              </button>
            ) : (
              <button
                onClick={stopCamera}
                className="rounded-xl border border-border px-6 py-3 font-medium text-foreground transition hover:border-primary/60"
              >
                Спри камерата
              </button>
            )}
          </div>

          {predictions.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Разпознати обекти:
              </h3>

              <div className="flex flex-wrap gap-2">
                {predictions.map((prediction, index) => (
                  <span
                    key={`${prediction.class}-${index}`}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {prediction.class} — {Math.round(prediction.score * 100)}%
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}