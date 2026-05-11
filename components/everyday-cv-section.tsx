import {
  QrCode,
  Sparkles,
  Search,
  ShoppingCart,
  Car,
  ShieldCheck,
} from "lucide-react"

const everydayUses = [
  {
    title: "QR Code Scanning",
    bgTitle: "Сканиране на QR код",
    description:
      "Камерата разпознава специфичния код и го превръща в линк или информация.",
    visual: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20200615212723",
    icon: QrCode,
  },
  {
    title: "Social Media Filters",
    bgTitle: "Филтри в социални мрежи",
    description:
      "Приложението открива лице, очи и уста, за да постави ефекти върху тях.",
    visual: "https://www.instyle.com/thmb/6W3SbFmO8JAGgdLkbNLwxvOrsVA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/102521-impacts-beauty-filters-social-2000-3ddef60355244aa782b03ff7fb97924c.jpg",
    icon: Sparkles,
  },
  {
    title: "Google Lens",
    bgTitle: "Търсене по изображение",
    description:
      "AI анализира снимка и намира подобни обекти, текст или информация онлайн.",
    visual: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2020/05/google-lens.jpg?w=1200&h=675&fit=crop",
    icon: Search,
  },
  {
    title: "Self-checkout",
    bgTitle: "Автоматично разпознаване в магазини",
    description:
      "Камери и AI могат да разпознават продукти и да подпомагат плащането.",
    visual: "https://www.e-consystems.com/blog/camera/wp-content/uploads/2024/07/The-Role-of-AI-Driven-Embedded-Vision-Cameras-in-Self-Checkout-Loss-Prevention.png",
    icon: ShoppingCart,
  },
  {
    title: "Parking Cameras",
    bgTitle: "Камери за паркиране",
    description:
      "Системите откриват препятствия, линии, автомобили и пешеходци около колата.",
    visual: "https://typesauto.com/cdn/shop/products/type-s-add-on-wireless-solar-powered-hd-parking-camera-bt56780-1-917811.jpg?v=1704970742&width=1030",
    icon: Car,
  },
  {
    title: "Security Cameras",
    bgTitle: "Камери за сигурност",
    description:
      "AI може да открива движение, хора, лица или необичайни ситуации.",
    visual: "https://montavue.com/cdn/shop/articles/how-far-can-security-cameras-see-at-night-guide-montavue.png?v=1671734359",
    icon: ShieldCheck,
  },
]

export function EverydayCvSection() {
  return (
    <section id="ежедневие" className="scroll-mt-28 bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            В ежедневието
          </span>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Къде използваме Computer Vision всеки ден?
          </h2>

          <p className="text-muted-foreground">
            Компютърното зрение вече не е само лабораторна технология. То се
            използва в телефони, коли, магазини и приложения, които използваме
            всеки ден.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {everydayUses.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="relative h-52 overflow-hidden bg-background">
                  <img
                    src={item.visual}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-background/80 text-primary backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-1 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mb-3 text-sm font-medium text-primary">
                    {item.bgTitle}
                  </p>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}