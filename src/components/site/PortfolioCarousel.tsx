import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import pump1 from "@/assets/pump-1.asset.json";
import pump2 from "@/assets/pump-2.asset.json";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const images = [
  { src: pump1.url, alt: "Sistema de pressurização instalado pela WF Bombas" },
  { src: work1, alt: "Bomba de pressurização com tubulação em cobre" },
  { src: pump2.url, alt: "Bomba centrífuga atendida pela WF Bombas" },
  { src: work2, alt: "Manutenção de motor de bomba d'água" },
  { src: work3, alt: "Instalação de bomba submersa em poço" },
  { src: work4, alt: "Sala de máquinas com bombas duplas" },
];

export function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <section className="bg-muted py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Portfólio
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground lg:text-3xl">
              Trabalhos realizados em campo
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Instalações e manutenções feitas em imóveis residenciais e condomínios da Zona Sul de SP.
          </p>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-4 lg:px-8">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="relative flex h-[280px] max-h-[280px] shrink-0 basis-[80%] items-center justify-center overflow-hidden rounded-sm bg-surface-darker sm:basis-[45%] lg:basis-[28%]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}