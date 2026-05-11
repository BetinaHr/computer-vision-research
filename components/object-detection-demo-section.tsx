"use client"

import { useEffect, useRef, useState } from "react"
import {
  Camera,
  Loader2,
  PauseCircle,
  PlayCircle,
  ScanSearch,
  Sparkles,
} from "lucide-react"

type DetectionCategory = {
  categoryName: string
  score: number
}

type Detection = {
  boundingBox?: {
    originX: number
    originY: number
    width: number
    height: number
  }
  categories?: DetectionCategory[]
}

type ObjectDetectorInstance = {
  detectForVideo: (
    video: HTMLVideoElement,
    timestampMs: number
  ) => {
    detections?: Detection[]
  }
  close?: () => void
}

const usefulObjects = [
  "person",
  "cell phone",
  "laptop",
  "book",
  "cup",
  "bottle",
  "chair",
  "keyboard",
  "mouse",
  "backpack",
]

export function ObjectDetectionDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const detectorRef = useRef<ObjectDetectorInstance | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const lastVideoTimeRef = useRef(-1)

  const [isRunning, setIsRunning] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState(
    "Натисни бутона и позволи достъп до камерата."
  )
  const [detections, setDetections] = useState<Detection[]>([])

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")

    if (!canvas || !context) return

    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  const stopCamera = () => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }

    lastVideoTimeRef.current = -1
    setIsRunning(false)
    setDetections([])
    setStatusMessage("Камерата е спряна.")
    clearCanvas()
  }

  useEffect(() => {
    return () => {
      stopCamera()
      detectorRef.current?.close?.()
    }
  }, [])

  const createObjectDetector = async () => {
    if (detectorRef.current) return detectorRef.current

    const { FilesetResolver, ObjectDetector } = await import(
      "@mediapipe/tasks-vision"
    )

    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    )

    detectorRef.current = await ObjectDetector.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/int8/1/efficientdet_lite0.tflite",
      },
      runningMode: "VIDEO",
      scoreThreshold: 0.35,
      maxResults: 6,
    })

    return detectorRef.current
  }

  const drawDetections = (currentDetections: Detection[]) => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")

    if (!video || !canvas || !context) return

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    context.clearRect(0, 0, canvas.width, canvas.height)

    currentDetections.forEach((detection) => {
      const box = detection.boundingBox
      const category = detection.categories?.[0]

      if (!box || !category) return

      const label = `${category.categoryName} ${(category.score * 100).toFixed(
        0
      )}%`

      context.lineWidth = 4
      context.strokeStyle = "#22c55e"
      context.fillStyle = "rgba(34, 197, 94, 0.18)"

      const mirroredX = canvas.width - box.originX - box.width
      context.strokeRect(box.originX, box.originY, box.width, box.height)
      context.fillRect(box.originX, box.originY, box.width, box.height)

      context.font = "18px sans-serif"
      const textWidth = context.measureText(label).width
      const labelX = box.originX
      const labelY = Math.max(box.originY - 28, 0)

      context.fillStyle = "#22c55e"
      context.fillRect(labelX, labelY, textWidth + 16, 26)

      context.fillStyle = "#020617"
      context.fillText(label, labelX + 8, labelY + 19)
    })
  }

  const predictWebcam = () => {
    const video = videoRef.current
    const detector = detectorRef.current

    if (!video || !detector || video.readyState < 2) {
      animationFrameRef.current = requestAnimationFrame(predictWebcam)
      return
    }

    if (video.currentTime !== lastVideoTimeRef.current) {
      lastVideoTimeRef.current = video.currentTime

      const results = detector.detectForVideo(video, Date.now())
      const currentDetections = results.detections ?? []

      setDetections(currentDetections)
      drawDetections(currentDetections)

      if (currentDetections.length > 0) {
        setStatusMessage("Обектите се разпознават в реално време.")
      } else {
        setStatusMessage("Покажи обект като телефон, лаптоп, книга или чаша.")
      }
    }

    animationFrameRef.current = requestAnimationFrame(predictWebcam)
  }

  const startCamera = async () => {
    if (isRunning || isLoading) return

    setIsLoading(true)
    setStatusMessage("Зареждане на Object Detection модела...")

    try {
      await createObjectDetector()

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      })

      streamRef.current = stream

      if (!videoRef.current) return

      videoRef.current.srcObject = stream

      await new Promise<void>((resolve) => {
        if (!videoRef.current) return resolve()
        videoRef.current.onloadedmetadata = () => resolve()
      })

      await videoRef.current.play()

      lastVideoTimeRef.current = -1
      setIsRunning(true)
      setStatusMessage("Камерата е активна. Покажи обект пред нея.")
      predictWebcam()
    } catch (error) {
      console.error(error)
      setDetections([])
      setStatusMessage(
        "Неуспешно стартиране. Провери дали браузърът има достъп до камерата."
      )
      stopCamera()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="object-detection" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Интерактивно демо
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            MediaPipe Object Detection
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Това демо използва камерата, за да открива обекти в реално време и
            да поставя правоъгълници около тях. Така може ясно да се види
            разликата между разпознаване на жест и откриване на обекти.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
          <div className="rounded-2xl bg-background border border-border p-4 md:p-6 shadow-sm">
            <div className="relative overflow-hidden rounded-xl border border-border bg-black aspect-video">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover scale-x-[-1]"
                playsInline
                muted
              />

              <canvas
                ref={canvasRef}
  className="absolute inset-0 h-full w-full object-cover"
              />

              {!isRunning && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/80 text-center p-6">
                  <Camera className="h-12 w-12 text-primary" />
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Камерата ще се включи само след натискане на бутона.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button
                onClick={startCamera}
                disabled={isRunning || isLoading}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <PlayCircle className="h-5 w-5" />
                )}
                {isLoading
                  ? "Стартиране..."
                  : isRunning
                    ? "Камерата е активна"
                    : "Стартирай камерата"}
              </button>

              <button
                onClick={stopCamera}
                disabled={!isRunning && !isLoading}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                <PauseCircle className="h-5 w-5" />
                Спри камерата
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-background border border-border p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <ScanSearch className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Разпознати обекти
                </h3>
                <p className="text-sm text-muted-foreground">
                  Резултат от MediaPipe Object Detector
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-card border border-border p-5 min-h-[180px]">
              {detections.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <ScanSearch className="h-10 w-10 text-muted-foreground mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Все още няма разпознати обекти.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {detections.map((detection, index) => {
                    const category = detection.categories?.[0]

                    if (!category) return null

                    return (
                      <div
                        key={`${category.categoryName}-${index}`}
                        className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-4 py-3"
                      >
                        <span className="font-medium text-foreground">
                          {category.categoryName}
                        </span>

                        <span className="text-sm text-primary font-semibold">
                          {(category.score * 100).toFixed(1)}%
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              {statusMessage}
            </p>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                Пробвай с тези обекти
              </div>

              <div className="flex flex-wrap gap-2">
                {usefulObjects.map((objectName) => (
                  <span
                    key={objectName}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border text-sm text-foreground"
                  >
                    {objectName}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">
                Какво показва това демо?
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Моделът не просто казва какъв обект вижда, а намира и къде се
                намира той в кадъра. Това се нарича object detection и обикновено
                се визуализира с bounding boxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}