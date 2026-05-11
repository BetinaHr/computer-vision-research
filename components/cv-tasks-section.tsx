import {
  Image,
  ScanSearch,
  Layers3,
  ScanFace,
  PersonStanding,
  TextSearch,
} from "lucide-react"

const tasks = [
  {
    title: "Image Classification",
    bgTitle: "Класификация на изображение",
    description:
      "AI моделът гледа цялата снимка и решава какво основно има в нея.",
    example: "Пример: „Това е котка.“",
    visual: "/images/tasks/classification.gif",
    icon: Image,
  },
  {
    title: "Object Detection",
    bgTitle: "Откриване на обекти",
    description:
      "Системата намира обекти в изображението и чертае рамки около тях.",
    example: "Пример: „Има човек, кола и куче.“",
    visual: "/images/tasks/detection.gif",
    icon: ScanSearch,
  },
  {
    title: "Image Segmentation",
    bgTitle: "Сегментация",
    description:
      "AI маркира точните пиксели, които принадлежат към всеки обект.",
    example: "Пример: разделяне на път, коли, хора и небе.",
    visual: "/images/tasks/segmentation.gif",
    icon: Layers3,
  },
  {
    title: "Face Recognition",
    bgTitle: "Разпознаване на лица",
    description:
      "Системата открива лице и може да сравни дали то принадлежи на даден човек.",
    example: "Пример: отключване на телефон с лице.",
    visual: "/images/tasks/face-recognition.gif",
    icon: ScanFace,
  },
  {
    title: "Pose Estimation",
    bgTitle: "Разпознаване на поза",
    description:
      "AI открива ключови точки по човешкото тяло — ръце, крака, рамене и глава.",
    example: "Пример: фитнес приложения и motion tracking.",
    visual: "/images/tasks/pose-estimation.gif",
    icon: PersonStanding,
  },
  {
    title: "Optical Character Recognition",
    bgTitle: "OCR / Разпознаване на текст",
    description:
      "Системата разчита букви и цифри от снимки, документи или табели.",
    example: "Пример: сканиране на документ в текст.",
    visual: "/images/tasks/ocr.gif",
    icon: TextSearch,
  },
]

export function CvTasksSection() {
  return (
    <section id="задачи" className="scroll-mt-28 bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Видове задачи
          </span>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Какви задачи решава компютърното зрение?
          </h2>

          <p className="text-muted-foreground">
            Компютърното зрение не е само едно нещо. То включва различни задачи —
            от разпознаване на обекти до четене на текст и анализ на човешка поза.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tasks.map((task) => {
            const Icon = task.icon

            return (
              <article
                key={task.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="relative h-52 overflow-hidden bg-background">
                  <img
                    src={task.visual}
                    alt={task.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-background/80 text-primary backdrop-blur">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {task.title}
                  </h3>

                  <p className="mb-4 text-sm font-medium text-primary">
                    {task.bgTitle}
                  </p>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {task.description}
                  </p>

                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
                    <p className="text-sm font-medium text-foreground">
                      {task.example}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}