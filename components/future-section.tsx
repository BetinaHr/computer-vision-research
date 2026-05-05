import { Sparkles, TrendingUp, Globe, Lightbulb } from "lucide-react"

const trends = [
  {
    icon: Sparkles,
    title: "Генеративни модели",
    description: "DALL-E, Midjourney и Stable Diffusion показват как AI може да създава реалистични изображения от текст, размивайки границата между реалност и изкуство.",
  },
  {
    icon: TrendingUp,
    title: "Ефективни архитектури",
    description: "MobileNet, EfficientNet и подобни модели позволяват работа на мобилни устройства и вградени системи с минимални ресурси.",
  },
  {
    icon: Globe,
    title: "Мултимодално обучение",
    description: "Модели като CLIP и GPT-4V комбинират текст и изображения, отваряйки нови възможности за разбиране на визуален контекст.",
  },
  {
    icon: Lightbulb,
    title: "Етични съображения",
    description: "Нарастващ фокус върху справедливост, прозрачност и отговорна употреба на технологиите за зрение в обществото.",
  },
]

export function FutureSection() {
  return (
    <section id="бъдеще" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Бъдеще</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              Какво ни очаква?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Компютърното зрение се развива с невероятни темпове. Нови архитектури, по-големи набори от данни и по-мощен хардуер продължават да разширяват границите на възможното.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Очакваме да видим още по-дълбока интеграция на визуалния AI в ежедневието ни — от умни домове и носими устройства до напълно автономни градове. Ключът е в балансирането на иновациите с етичните съображения.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {trends.map((trend) => (
              <div
                key={trend.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <trend.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-foreground">{trend.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Готови да навлезете в света на компютърното зрение?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Започнете с популярни библиотеки като OpenCV, PyTorch и TensorFlow. Има множество безплатни ресурси и курсове, които ще ви помогнат да направите първите стъпки.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium text-foreground">
                OpenCV
              </span>
              <span className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium text-foreground">
                PyTorch
              </span>
              <span className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium text-foreground">
                TensorFlow
              </span>
              <span className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium text-foreground">
                Hugging Face
              </span>
              <span className="px-4 py-2 rounded-lg bg-background border border-border text-sm font-medium text-foreground">
                YOLO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
