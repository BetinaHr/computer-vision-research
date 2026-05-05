import { Eye, Brain, Cpu, Zap } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Визуално възприятие",
    description: "Камери и сензори улавят изображения от реалния свят, подобно на човешкото око.",
  },
  {
    icon: Brain,
    title: "Обработка на данни",
    description: "Алгоритми анализират пикселите и извличат смислена информация от изображенията.",
  },
  {
    icon: Cpu,
    title: "Машинно обучение",
    description: "Невронни мрежи се обучават да разпознават обекти, лица и сцени с висока точност.",
  },
  {
    icon: Zap,
    title: "Реално време",
    description: "Модерните системи обработват видео в реално време за мигновени решения.",
  },
]

export function AboutSection() {
  return (
    <section id="за-нас" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Въведение</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Какво е компютърно зрение?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Компютърното зрение е област от изкуствения интелект, която се занимава с това как компютрите могат да разбират и интерпретират визуални данни от околния свят. То комбинира алгоритми за обработка на изображения с машинно обучение.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-background border border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%+</div>
              <div className="text-sm text-muted-foreground">Точност при разпознаване на обекти</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">60 FPS</div>
              <div className="text-sm text-muted-foreground">Обработка в реално време</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Категории за разпознаване</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
