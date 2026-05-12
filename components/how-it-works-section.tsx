import { Camera, SlidersHorizontal, ScanSearch, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Image Acquisition",
    bgTitle: "Заснемане на изображение",
    description:
      "Камера или сензор заснема изображение или видео, което компютърът трябва да анализира.",
    examples: ["Камера", "Видео поток", "Снимка"],
    icon: Camera,
  },
  {
    number: "02",
    title: "Preprocessing",
    bgTitle: "Предварителна обработка",
    description:
      "Изображението се подобрява, за да бъде по-лесно за анализ от AI модела.",
    examples: ["Преоразмеряване", "Премахване на шум", "Настройка на яркост"],
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Feature Extraction",
    bgTitle: "Извличане на признаци",
    description:
      "Системата търси важни визуални елементи като ръбове, форми, цветове и текстури.",
    examples: ["Ръбове", "Форми", "Цветове", "Текстури"],
    icon: ScanSearch,
  },
  {
    number: "04",
    title: "Recognition and Decision",
    bgTitle: "Разпознаване и решение",
    description:
      "AI моделът класифицира или открива обекти и взема решение на база намерените признаци.",
    examples: ["Това е котка", "Това е знак STOP", "Открит е човек"],
    icon: CheckCircle2,
  },
]

export function HowItWorksSection() {
  return (
    <section id="как-работи" className="scroll-mt-28 bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Процес
          </span>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Как работи компютърното зрение?
          </h2>

          <p className="text-muted-foreground">
            Компютърното зрение преминава през няколко основни стъпки — от
            заснемане на изображение до разпознаване на обекти и вземане на
            решение.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="absolute right-4 top-4 text-6xl font-bold text-muted/20">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mb-4 text-sm font-medium text-primary">
                    {step.bgTitle}
                  </p>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-6 text-center">
          <p className="text-muted-foreground">
            Пример: системата получава изображение, обработва го, открива
            форми и цветове, след което решава:{" "}
            <span className="font-semibold text-foreground">„Това е котка.“</span>{" "}
            или{" "}
            <span className="font-semibold text-foreground">
              „Това е пътен знак STOP.“
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}