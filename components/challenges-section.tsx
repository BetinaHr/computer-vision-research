import { Lightbulb, EyeOff, Database, ShieldAlert } from "lucide-react"

const challenges = [
  {
    title: "Lighting Conditions",
    bgTitle: "Проблеми със светлината",
    description:
      "Изображенията може да са прекалено тъмни, прекалено светли или с лош контраст.",
    icon: Lightbulb,
  },
  {
    title: "Occlusion",
    bgTitle: "Частично скрити обекти",
    description:
      "Понякога обектът не се вижда напълно, защото е закрит от друг предмет или човек.",
    icon: EyeOff,
  },
  {
    title: "Large Data Requirements",
    bgTitle: "Нужда от много данни",
    description:
      "Моделите с дълбоко обучение често изискват огромни набори от изображения за обучение.",
    icon: Database,
  },
  {
    title: "Ethical Issues",
    bgTitle: "Етични проблеми",
    description:
      "Съществуват рискове, свързани с поверителност, пристрастия в AI системите и грешно разпознаване.",
    icon: ShieldAlert,
  },
]

export function ChallengesSection() {
  return (
<section id="предизвикателства" className="scroll-mt-28 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Предизвикателства
          </span>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Предизвикателства в компютърното зрение
          </h2>

          <p className="text-muted-foreground">
            Въпреки че компютърното зрение е много мощна технология, то все още
            има проблеми, които трябва да се решават внимателно.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {challenges.map((challenge) => {
            const Icon = challenge.icon

            return (
              <div
                key={challenge.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {challenge.title}
                    </h3>

                    <p className="text-sm font-medium text-primary">
                      {challenge.bgTitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {challenge.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}