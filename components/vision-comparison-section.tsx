import { Brain, Cpu, CheckCircle2, AlertCircle } from "lucide-react"

const humanVision = [
  "Разбира контекст естествено",
  "Разпознава обекти с малко примери",
  "Използва опит, интуиция и памет",
  "Може да разбира емоции и намерения",
]

const computerVision = [
  "Нуждае се от много данни за обучение",
  "Може да обработва хиляди изображения бързо",
  "Работи добре в повтарящи се задачи",
  "Може да работи в опасна или индустриална среда",
]

export function VisionComparisonSection() {
  return (
    <section id="човешко-срещу-компютърно" className="scroll-mt-28 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Сравнение
          </span>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Computer Vision vs Human Vision
          </h2>

          <p className="text-muted-foreground">
            Човешкото зрение и компютърното зрение имат една обща цел —
            разбиране на визуална информация, но работят по много различен начин.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative h-64 overflow-hidden bg-background">
              <img
                src="https://scitechdaily.com/images/Human-Vision-Concept.gif"
                alt="Human vision"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/80 text-primary backdrop-blur">
                  <Brain className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Human Vision
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Човешко зрение
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-6">
              {humanVision.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-background p-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative h-64 overflow-hidden bg-background">
              <img
                src="https://ibagroupit.com/wp-content/uploads/2020/06/computer-vision.gif"
                alt="Computer vision"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/80 text-primary backdrop-blur">
                  <Cpu className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Computer Vision
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Компютърно зрение
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-6">
              {computerVision.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-background p-3"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Човекът разбира света естествено, докато компютърното зрение се
            нуждае от данни, модели и обучение. Но компютърът може да анализира
            огромно количество изображения много бързо и без умора.
          </p>
        </div>
      </div>
    </section>
  )
}