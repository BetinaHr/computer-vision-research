"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, Hand, Loader2, PauseCircle, PlayCircle, Sparkles } from "lucide-react"

type GestureName =
  | "Open_Palm"
  | "Closed_Fist"
  | "Pointing_Up"
  | "Thumb_Up"
  | "Thumb_Down"
  | "Victory"
  | "ILoveYou"
  | "None"
  | "Грешка"

type GestureRecognizerInstance = {
  recognizeForVideo: (video: HTMLVideoElement, timestampMs: number) => {
    gestures?: Array<Array<{ categoryName: string; score: number }>>
  }
  close?: () => void
}

const emojiMap: Record<string, string> = {
  Open_Palm: "🖐️",
  Closed_Fist: "✊",
  Pointing_Up: "☝️",
  Thumb_Up: "👍",
  Thumb_Down: "👎",
  Victory: "✌️",
  ILoveYou: "🤟",
  None: "🙂",
  Грешка: "⚠️",
}

const gestureLabels: Record<string, string> = {
  Open_Palm: "Отворена длан",
  Closed_Fist: "Юмрук",
  Pointing_Up: "Посочване нагоре",
  Thumb_Up: "Палец нагоре",
  Thumb_Down: "Палец надолу",
  Victory: "Victory / мир",
  ILoveYou: "I love you",
  None: "Няма разпознат жест",
  Грешка: "Грешка",
}

const supportedGestures = [
  "Open_Palm",
  "Closed_Fist",
  "Pointing_Up",
  "Thumb_Up",
  "Thumb_Down",
  "Victory",
  "ILoveYou",
]

export function GestureDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const recognizerRef = useRef<GestureRecognizerInstance | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const lastVideoTimeRef = useRef(-1)

  const [gestureName, setGestureName] = useState<GestureName>("None")
  const [score, setScore] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("Натисни бутона и позволи достъп до камерата.")

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
    setGestureName("None")
    setScore(0)
    setStatusMessage("Камерата е спряна.")
  }

  useEffect(() => {
    return () => {
      stopCamera()
      recognizerRef.current?.close?.()
    }
  }, [])

  const createGestureRecognizer = async () => {
    if (recognizerRef.current) return recognizerRef.current

    const { FilesetResolver, GestureRecognizer } = await import("@mediapipe/tasks-vision")

    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    )

    recognizerRef.current = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
      },
      runningMode: "VIDEO",
      numHands: 1,
    })

    return recognizerRef.current
  }

  const predictWebcam = () => {
    const video = videoRef.current
    const recognizer = recognizerRef.current

    if (!video || !recognizer || video.readyState < 2) {
      animationFrameRef.current = requestAnimationFrame(predictWebcam)
      return
    }

    if (video.currentTime !== lastVideoTimeRef.current) {
      lastVideoTimeRef.current = video.currentTime
      const results = recognizer.recognizeForVideo(video, Date.now())
      const topGesture = results.gestures?.[0]?.[0]

      if (topGesture) {
        setGestureName(topGesture.categoryName as GestureName)
        setScore(topGesture.score)
        setStatusMessage("Жестът се разпознава в реално време.")
      } else {
        setGestureName("None")
        setScore(0)
        setStatusMessage("Покажи дланта си по-ясно пред камерата.")
      }
    }

    animationFrameRef.current = requestAnimationFrame(predictWebcam)
  }

  const startCamera = async () => {
    if (isRunning || isLoading) return

    setIsLoading(true)
    setStatusMessage("Зареждане на MediaPipe модела...")

    try {
      await createGestureRecognizer()

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
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
      setStatusMessage("Камерата е активна. Покажи жест пред нея.")
      predictWebcam()
    } catch (error) {
      console.error(error)
      setGestureName("Грешка")
      setScore(0)
      setStatusMessage("Неуспешно стартиране. Провери дали браузърът има достъп до камерата.")
      stopCamera()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="демо" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Интерактивно демо</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            MediaPipe Emoji Gesture Recognition
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Това е добавената част от стария проект — камерата разпознава жестове с MediaPipe и ги показва като emoji, име на жеста и точност.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
          <div className="rounded-2xl bg-card border border-border p-4 md:p-6 shadow-sm">
            <div className="relative overflow-hidden rounded-xl border border-border bg-black aspect-video">
              <video
                ref={videoRef}
                className="h-full w-full object-cover scale-x-[-1]"
                playsInline
                muted
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
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <PlayCircle className="h-5 w-5" />}
                {isLoading ? "Стартиране..." : isRunning ? "Камерата е активна" : "Стартирай камерата"}
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

          <div className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Hand className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Разпознат жест</h3>
                <p className="text-sm text-muted-foreground">Резултат от MediaPipe модела</p>
              </div>
            </div>

            <div className="rounded-2xl bg-background border border-border p-6 text-center">
              <div className="text-7xl md:text-8xl leading-none mb-4" aria-hidden="true">
                {emojiMap[gestureName] ?? "❓"}
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                {gestureLabels[gestureName] ?? gestureName}
              </div>
              <div className="text-sm text-muted-foreground">
                Точност: {score > 0 ? `${(score * 100).toFixed(1)}%` : "—"}
              </div>
            </div>

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{statusMessage}</p>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                Поддържани жестове
              </div>
              <div className="flex flex-wrap gap-2">
                {supportedGestures.map((gesture) => (
                  <span
                    key={gesture}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-background border border-border text-sm text-foreground"
                  >
                    <span aria-hidden="true">{emojiMap[gesture]}</span>
                    {gestureLabels[gesture]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
