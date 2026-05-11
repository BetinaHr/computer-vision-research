"use client"

import {
  Layers,
  Network,
  ScanFace,
  ImageIcon,
  FileVideo,
  Box,
} from "lucide-react"

import { InteractiveInfoCard } from "@/components/interactive-info-card"

const technologies = [
  {
    icon: Layers,
    title: "Конволюционни невронни мрежи (CNN)",
    description:
      "Основна архитектура за обработка на изображения, която използва филтри за откриване на ръбове, форми, текстури и обекти.",
    details:
      "Конволюционните невронни мрежи са една от най-важните технологии в компютърното зрение. Те обработват изображението чрез малки филтри, които преминават върху пикселите и откриват важни характеристики. В началните слоеве CNN разпознава прости елементи като линии, ръбове и контрасти. В по-дълбоките слоеве вече се откриват по-сложни форми, текстури и цели обекти. Това позволява на системата да разбере какво има в изображението, вместо просто да гледа пиксели.",
    bullets: [
      "Използват филтри за откриване на визуални характеристики.",
      "Ранните слоеве разпознават ръбове и линии.",
      "По-дълбоките слоеве разпознават форми, текстури и обекти.",
      "Използват се при класификация, object detection и segmentation.",
    ],
    tags: ["Deep Learning", "Feature Extraction", "Image Classification"],
    image: "https://poloclub.github.io/cnn-explainer/assets/figures/convlayer_detailedview_demo.gif",
    embedUrl: "https://www.youtube-nocookie.com/embed/aircAruvnKk",
    numberLabel: "01",
  },
  {
    icon: Network,
    title: "Трансформери за зрение (ViT)",
    description:
      "Модерна архитектура, която разделя изображението на малки части и използва attention механизъм за анализ на визуалния контекст.",
    details:
      "Vision Transformers, или ViT, използват идея, подобна на езиковите модели. Вместо изображението да се обработва само с конволюционни филтри, то се разделя на малки квадратни области, наречени patches. Всеки patch се разглежда като отделна част от информацията. След това attention механизмът помага на модела да разбере кои части от изображението са най-важни една спрямо друга. Това е особено полезно при сложни сцени, където обектите са разпръснати или контекстът е важен.",
    bullets: [
      "Разделят изображението на малки patches.",
      "Използват attention механизъм.",
      "Могат да разбират по-добре глобалния контекст.",
      "Използват се в модерни AI vision системи.",
    ],
    tags: ["Attention", "Vision Transformer", "Modern AI"],
    image: "https://cdn-images-1.medium.com/max/720/1*8GPsf622HvOTyEoBGyhYlw.gif",
    embedUrl: "https://www.youtube-nocookie.com/embed/TrdevFK_am4",
    numberLabel: "02",
  },
  {
    icon: ScanFace,
    title: "Разпознаване на лица",
    description:
      "Технология за откриване, анализ и сравнение на лица чрез уникални лицеви характеристики.",
    details:
      "Разпознаването на лица е област от компютърното зрение, при която системата първо открива лице в изображението, след това анализира неговите особености и накрая го сравнява с други лица. Моделът не запомня лицето като обикновена снимка, а го превръща в числово представяне, наречено embedding. Така може да се провери дали две лица принадлежат на един и същи човек. Технологии като FaceNet и ArcFace се използват за идентификация и верификация.",
    bullets: [
      "Първо се открива къде има лице в изображението.",
      "След това лицето се превръща в числово представяне.",
      "Сравняват се лицеви характеристики, а не просто снимки.",
      "Използва се в телефони, системи за достъп и сигурност.",
    ],
    tags: ["Biometrics", "Identity", "Face Detection"],
    image: "https://i.pinimg.com/originals/b9/a3/8c/b9a38c8fe59f50c79697112954f0b6ce.gif",
    embedUrl: "https://www.youtube-nocookie.com/embed/yN7ypxC7838",
    numberLabel: "03",
  },
  {
    icon: ImageIcon,
    title: "Семантична сегментация",
    description:
      "Метод, при който всеки пиксел от изображението се класифицира към определен клас, например път, човек, кола или сграда.",
    details:
      "Семантичната сегментация е по-подробна от обикновеното разпознаване на обекти. При object detection моделът поставя правоъгълник около обекта, но при segmentation системата определя към кой клас принадлежи всеки пиксел. Например при автономен автомобил пикселите могат да бъдат разделени на път, тротоар, пешеходец, автомобил, небе и сгради. Това дава много по-точно разбиране на сцената.",
    bullets: [
      "Класифицира всеки пиксел от изображението.",
      "Дава по-точна информация от bounding boxes.",
      "Използва се при автономни автомобили и медицински изображения.",
      "Помага на системата да разбере цялата сцена.",
    ],
    tags: ["Pixel-wise", "Scene Understanding", "Segmentation"],
    image: "https://miro.medium.com/1*RZnBSB3QpkIwFUTRFaWDYg.gif",
    embedUrl: "https://www.youtube-nocookie.com/embed/nDPWywWRIRo",
    numberLabel: "04",
  },
  {
    icon: FileVideo,
    title: "Проследяване на обекти",
    description:
      "Техника за откриване и следене на обекти във видео поток през последователни кадри.",
    details:
      "Проследяването на обекти комбинира откриване на обекти и анализ на движението им във времето. Системата не само разбира, че в кадъра има човек, кола или друг обект, но и следи как този обект се движи между отделните кадри. Това е важно за видеонаблюдение, спортен анализ, автономни автомобили и роботика. Често се използват алгоритми като YOLO за откриване и DeepSORT за проследяване.",
    bullets: [
      "Открива обекти във видео кадри.",
      "Следи движението им във времето.",
      "Използва се в камери, автомобили, спорт и роботика.",
      "YOLO често се използва за бързо откриване на обекти.",
    ],
    tags: ["Real-time", "Multi-object", "YOLO", "Tracking"],
    image: "https://www.comet.com/site/wp-content/uploads/2023/05/PennFudan_bbox_mask_new.gif",
    embedUrl: "https://www.youtube-nocookie.com/embed/ag3DLKsl2vk",
    numberLabel: "05",
  },
  {
    icon: Box,
    title: "3D реконструкция",
    description:
      "Процес на създаване на триизмерен модел от двумерни изображения, видео или сензорни данни.",
    details:
      "3D реконструкцията позволява на компютъра да възстанови формата и дълбочината на обекти или цели сцени. Вместо да се работи само с плоско 2D изображение, системата се опитва да разбере как изглежда обектът в пространството. Това може да стане чрез няколко снимки от различни ъгли, видео, depth камери или LiDAR сензори. Използва се в роботика, архитектура, AR/VR, автономни системи и дигитално сканиране.",
    bullets: [
      "Създава 3D модел от 2D изображения или видео.",
      "Използва информация за перспектива и дълбочина.",
      "Може да работи с камери, depth сензори или LiDAR.",
      "Използва се в AR/VR, роботика и архитектура.",
    ],
    tags: ["Depth Estimation", "Point Clouds", "3D Vision"],
    image: "https://1.bp.blogspot.com/-loSqCB3NnM0/XoTiOGP9SYI/AAAAAAAAFlE/rs8iCTq63FYapA7HbljF8iWa7fyHvh3UgCLcBGAsYHQ/s1600/image3.gif",
    embedUrl: "https://www.youtube-nocookie.com/embed/i7ierVkXYa8",
    numberLabel: "06",
  },
]

export function TechnologiesSection() {
  return (
    <section id="технологии" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Технологии
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Основни технологии и методи
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Компютърното зрение разчита на комбинация от класически алгоритми
            за обработка на изображения и съвременни техники за дълбоко
            обучение. Всяка технология решава различен проблем — от
            разпознаване на обекти до анализ на видео и създаване на 3D сцени.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <InteractiveInfoCard key={tech.title} {...tech} />
          ))}
        </div>
      </div>
    </section>
  )
}