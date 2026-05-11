import {
  Car,
  Stethoscope,
  ShieldCheck,
  Factory,
  ShoppingBag,
  Gamepad2,
} from "lucide-react"

const applications = [
  {
    icon: Car,
    title: "Автономни превозни средства",
    description:
      "Самоуправляващите се автомобили използват камери и сензори за откриване на пътни знаци, пешеходци и други превозни средства. Tesla, Waymo и други компании инвестират милиарди в тази технология.",
    visual: "/images/applications/autonomous.svg",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Stethoscope,
    title: "Медицинска диагностика",
    description:
      "AI системи анализират рентгенови снимки, МРТ и CT сканове за откриване на тумори, фрактури и други аномалии. Точността често надвишава тази на опитни радиолози.",
    visual: "/images/applications/medical.svg",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Сигурност и наблюдение",
    description:
      "Системи за разпознаване на лица, анализ на поведение и откриване на аномалии се използват в обществени пространства, летища и финансови институции.",
    visual: "/images/applications/security.svg",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Factory,
    title: "Индустриална автоматизация",
    description:
      "Роботи с визуално възприятие извършват качествен контрол, сортиране и сглобяване на продукти с прецизност и скорост, недостижими за човека.",
    visual: "/images/applications/industry.svg",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: ShoppingBag,
    title: "Търговия и маркетинг",
    description:
      "Виртуално изпробване на дрехи, анализ на клиентско поведение в магазини и автоматично етикетиране на продукти революционизират ритейл индустрията.",
    visual: "/images/applications/retail.svg",
    color: "from-pink-500/20 to-fuchsia-500/20",
  },
  {
    icon: Gamepad2,
    title: "Развлечения и AR/VR",
    description:
      "Проследяване на движения, жестове и лицеви изражения за потапящи гейминг изживявания и приложения за добавена реалност.",
    visual: "/images/applications/ar-vr.svg",
    color: "from-indigo-500/20 to-violet-500/20",
  },
]

export function ApplicationsSection() {
  return (
    <section id="приложения" className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Приложения
          </span>
          <h2 className="mb-6 mt-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Реални приложения
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Компютърното зрение трансформира множество индустрии, от
            здравеопазване до транспорт, създавайки нови възможности и
            повишавайки ефективността.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {applications.map((app) => (
            <div
              key={app.title}
              className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative z-10 p-8 transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <app.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">
                      {app.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {app.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 z-20 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <img
                  src={app.visual}
                  alt={app.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {app.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {app.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
