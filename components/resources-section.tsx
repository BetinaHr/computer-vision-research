import {
  ExternalLink,
  Brain,
  Camera,
  Gamepad2,
  Sparkles,
  PersonStanding,
  Network,
} from "lucide-react"

const resources = [
  {
    title: "TensorFlow.js Demos",
    description:
      "Колекция от интерактивни демота с TensorFlow.js — разпознаване на обекти, поза, изображения и други AI примери в браузъра.",
    href: "https://www.tensorflow.org/js/demos",
    label: "AI demos",
    icon: Brain,
  },
  {
    title: "Teachable Machine",
    description:
      "Платформа от Google, с която можеш да обучиш собствен модел за изображения, звук или пози без писане на много код.",
    href: "https://teachablemachine.withgoogle.com/train/image",
    label: "Train your model",
    icon: Camera,
  },
  {
    title: "Emoji Scavenger Hunt",
    description:
      "Забавна игра, в която камерата търси реални предмети, съответстващи на емоджита.",
    href: "https://archive.google/emojiscavengerhunt/",
    label: "CV game",
    icon: Gamepad2,
  },
  {
    title: "Holobooth",
    description:
      "Интерактивен проект, който показва как AI и камера могат да създават визуални ефекти в реално време.",
    href: "https://holobooth.flutter.dev/#/",
    label: "Creative AI",
    icon: Sparkles,
  },
  {
    title: "Move Mirror",
    description:
      "Експеримент от Google, който сравнява позата на човек с изображения и показва как работи pose estimation.",
    href: "https://experiments.withgoogle.com/move-mirror",
    label: "Pose estimation",
    icon: PersonStanding,
  },
  {
    title: "CNN Explainer",
    description:
      "Визуално обяснение как работят конволюционните невронни мрежи стъпка по стъпка.",
    href: "https://poloclub.github.io/cnn-explainer/",
    label: "CNN visualization",
    icon: Network,
  },
]

export function ResourcesSection() {
  return (
    <section id="ресурси" className="scroll-mt-28 bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Полезни ресурси
          </span>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Интерактивни сайтове за Computer Vision
          </h2>

          <p className="text-muted-foreground">
            Тези сайтове показват компютърното зрение по по-забавен и разбираем
            начин чрез игри, демота, визуализации и интерактивни AI модели.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon

            return (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/5"
              >
                <div className="absolute right-5 top-5 opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-7 w-7" />
                </div>

                <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {resource.label}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {resource.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {resource.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Отвори сайта
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}