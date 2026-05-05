import { Layers, Network, ScanFace, ImageIcon, FileVideo, Box } from "lucide-react"

const technologies = [
  {
    icon: Layers,
    title: "Конволюционни невронни мрежи (CNN)",
    description:
      "Основната архитектура за обработка на изображения. CNN използват филтри за извличане на характеристики от изображения, позволявайки разпознаване на форми, текстури и обекти.",
    tags: ["Deep Learning", "Feature Extraction"],
  },
  {
    icon: Network,
    title: "Трансформери за зрение (ViT)",
    description:
      "Модерна архитектура, която прилага механизма за внимание към изображения. Разделя изображението на патчове и ги обработва подобно на текстови токени.",
    tags: ["Attention", "Self-Supervised"],
  },
  {
    icon: ScanFace,
    title: "Разпознаване на лица",
    description:
      "Технологии като FaceNet и ArcFace позволяват идентификация и верификация на лица с изключителна точност, използвайки дълбоки невронни мрежи.",
    tags: ["Biometrics", "Identity"],
  },
  {
    icon: ImageIcon,
    title: "Семантична сегментация",
    description:
      "Класифицира всеки пиксел в изображението към определен клас. Използва се в автономни превозни средства за разбиране на пътната сцена.",
    tags: ["Pixel-wise", "Scene Understanding"],
  },
  {
    icon: FileVideo,
    title: "Проследяване на обекти",
    description:
      "Алгоритми като YOLO и DeepSORT позволяват откриване и проследяване на множество обекти в реално време във видео поток.",
    tags: ["Real-time", "Multi-object"],
  },
  {
    icon: Box,
    title: "3D реконструкция",
    description:
      "Създаване на триизмерни модели от 2D изображения или видео. Използва се в AR/VR, роботика и архитектура.",
    tags: ["Depth Estimation", "Point Clouds"],
  },
]

export function TechnologiesSection() {
  return (
    <section id="технологии" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Технологии</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Основни технологии и методи
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Компютърното зрение разчита на комбинация от класически алгоритми за обработка на изображения и съвременни техники за дълбоко обучение.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-6xl font-bold text-muted/20">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{tech.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
