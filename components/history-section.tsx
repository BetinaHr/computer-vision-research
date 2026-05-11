import { Calendar, Brain, ScanFace, Smartphone } from "lucide-react"

const milestones = [
  {
    year: "1960s",
    title: "Първи изследвания в обработката на изображения",
    description:
      "Започват първите опити компютрите да анализират изображения и да извличат информация от тях.",
    icon: Calendar,
  },
  {
    year: "1990s",
    title: "Подобряване на алгоритмите за разпознаване на лица",
    description:
      "Развиват се методи, които позволяват по-точно откриване и разпознаване на човешки лица.",
    icon: ScanFace,
  },
  {
    year: "2012",
    title: "Революцията на дълбокото обучение",
    description:
      "След състезанието ImageNet 2012 невронните мрежи започват масово да се използват за разпознаване на изображения.",
    icon: Brain,
  },
  {
    year: "Днес",
    title: "Компютърното зрение е навсякъде",
    description:
      "Използва се в телефони, болници, фабрики, камери за сигурност и автономни автомобили.",
    icon: Smartphone,
  },
]

export function HistorySection() {
  return (
    <section id="history" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            История
          </span>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Кратка история на компютърното зрение
          </h2>

          <p className="text-muted-foreground">
            Компютърното зрение се развива постепенно — от ранна обработка на
            изображения до съвременни AI системи, които могат да разпознават
            лица, обекти и сцени.
          </p>
        </div>

<div className="mx-auto max-w-5xl">
  <div className="relative">
    <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

    <div className="space-y-8">
      {milestones.map((item, index) => {
        const Icon = item.icon

        return (
          <div
            key={item.year}
            className={`relative grid gap-6 md:grid-cols-2 ${
              index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
            }`}
          >
            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <span className="text-2xl font-bold text-primary">
                  {item.year}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  </div>

  <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
    <p className="text-sm leading-relaxed text-muted-foreground">
      Един от важните учени в развитието на конволюционните невронни мрежи е{" "}
      <span className="font-semibold text-foreground">Yann LeCun</span>, който има
      голям принос за развитието на CNN моделите.
    </p>
  </div>
</div>
      </div>
    </section>
  )
}