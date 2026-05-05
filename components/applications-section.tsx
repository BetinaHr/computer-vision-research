import { Car, Stethoscope, ShieldCheck, Factory, ShoppingBag, Gamepad2 } from "lucide-react"

const applications = [
  {
    icon: Car,
    title: "Автономни превозни средства",
    description:
      "Самоуправляващите се автомобили използват камери и сензори за откриване на пътни знаци, пешеходци и други превозни средства. Tesla, Waymo и други компании инвестират милиарди в тази технология.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Stethoscope,
    title: "Медицинска диагностика",
    description:
      "AI системи анализират рентгенови снимки, МРТ и CT сканове за откриване на тумори, фрактури и други аномалии. Точността често надвишава тази на опитни радиолози.",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Сигурност и наблюдение",
    description:
      "Системи за разпознаване на лица, анализ на поведение и откриване на аномалии се използват в обществени пространства, летища и финансови институции.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Factory,
    title: "Индустриална автоматизация",
    description:
      "Роботи с визуално възприятие извършват качествен контрол, сортиране и сглобяване на продукти с прецизност и скорост, недостижими за човека.",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: ShoppingBag,
    title: "Търговия и маркетинг",
    description:
      "Виртуално изпробване на дрехи, анализ на клиентско поведение в магазини и автоматично етикетиране на продукти революционизират ритейл индустрията.",
    color: "from-pink-500/20 to-fuchsia-500/20",
  },
  {
    icon: Gamepad2,
    title: "Развлечения и AR/VR",
    description:
      "Проследяване на движения, жестове и лицеви изражения за потапящи гейминг изживявания и приложения за добавена реалност.",
    color: "from-indigo-500/20 to-violet-500/20",
  },
]

export function ApplicationsSection() {
  return (
    <section id="приложения" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Приложения</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Реални приложения
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Компютърното зрение трансформира множество индустрии, от здравеопазване до транспорт, създавайки нови възможности и повишавайки ефективността.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app) => (
            <div
              key={app.title}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <app.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{app.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{app.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
