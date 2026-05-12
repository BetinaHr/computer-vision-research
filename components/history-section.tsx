"use client"

import { useState } from "react"
import { Calendar, Brain, ScanFace, Smartphone } from "lucide-react"

const milestones = [
  {
    year: "1960s",
    title: "Първи изследвания в обработката на изображения",
    description:
      "Започват първите опити компютрите да анализират изображения и да извличат информация от тях.",
    image: "https://miro.medium.com/v2/resize:fit:1270/1*Nf4unUrNgDRHqih-zC_IhQ.gif",
    icon: Calendar,
  },
  {
    year: "1990s",
    title: "Подобряване на алгоритмите за разпознаване на лица",
    description:
      "Развиват се методи, които позволяват по-точно откриване и разпознаване на човешки лица.",
    image: "https://cdn.dribbble.com/userupload/25126157/file/original-b4e375e11656bdb2c9aec5333f82acaa.gif",
    icon: ScanFace,
  },
  {
    year: "2012",
    title: "Революцията на дълбокото обучение",
    description:
      "След състезанието ImageNet 2012 невронните мрежи започват масово да се използват за разпознаване на изображения.",
    image: "https://serokell.io/files/9w/9wrzg5vi.Deep_Learning_in_Computer_Vision_pic2.png",
    icon: Brain,
  },
  {
    year: "Днес",
    title: "Компютърното зрение е навсякъде",
    description:
      "Използва се в телефони, болници, фабрики, камери за сигурност и автономни автомобили.",
    image: "https://www.sectechfield.com/img/tech-eye.gif",
    icon: Smartphone,
  },
]

export function HistorySection() {
  const [flippedCards, setFlippedCards] = useState<string[]>([])

  const toggleCard = (year: string) => {
    setFlippedCards((prev) =>
      prev.includes(year)
        ? prev.filter((item) => item !== year)
        : [...prev, year]
    )
  }

  return (
    <section id="история" className="scroll-mt-28 pt-32 pb-24">
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
          <div className="relative overflow-visible">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

            <div className="space-y-12">
              {milestones.map((item, index) => {
                const Icon = item.icon
                const isFlipped = flippedCards.includes(item.year)
                const isLeftSide = index % 2 === 0

                return (
                  <div
                    key={item.year}
                    className="relative grid gap-0 overflow-visible md:grid-cols-2"
                  >
                    <div
                      className={
                        isLeftSide
                          ? "md:col-start-1 md:pr-0"
                          : "md:col-start-2 md:pl-0"
                      }
                    >
                      <button
                        type="button"
                        onClick={() => toggleCard(item.year)}
                        className="group h-[250px] w-full text-left"
                        style={{ perspective: "1400px" }}
                      >
                        <div
                          className="relative h-full w-full transition-transform duration-700 ease-out"
                          style={{
                            transformStyle: "preserve-3d",
                            transformOrigin: isLeftSide
                              ? "right center"
                              : "left center",
                            transform: isFlipped
                              ? isLeftSide
                                ? "rotateY(-180deg)"
                                : "rotateY(180deg)"
                              : "rotateY(0deg)",
                          }}
                        >
                          {/* Front side */}
                          <div
                            className="absolute inset-0 rounded-2xl border border-border bg-card p-6 transition-all duration-300 group-hover:border-primary/50"
                            style={{
                              backfaceVisibility: "hidden",
                            }}
                          >
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

                            <p className="absolute bottom-4 right-5 text-xs font-medium text-primary/70">
                              Кликни за визуализация
                            </p>
                          </div>

                          {/* Back side - only image */}
                          <div
                            className="absolute inset-0 overflow-hidden rounded-2xl border border-primary/40 bg-card"
                            style={{
                              backfaceVisibility: "hidden",
                              transform: isLeftSide
                                ? "rotateY(180deg)"
                                : "rotateY(-180deg)",
                            }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Един от важните учени в развитието на конволюционните невронни
              мрежи е{" "}
              <span className="font-semibold text-foreground">Yann LeCun</span>,
              който има голям принос за развитието на CNN моделите.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}