import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import img001 from "@/assets/img001.webp";
import img002 from "@/assets/img002.webp";
import img003 from "@/assets/img003.webp";
import img004 from "@/assets/img004.webp";
import img005 from "@/assets/img005.webp";
import img006 from "@/assets/img006.webp";
import img007 from "@/assets/img007.webp";
import img008 from "@/assets/img008.webp";
import img009 from "@/assets/img009.webp";
import img010 from "@/assets/img010.webp";
import img011 from "@/assets/img011.webp";
import img012 from "@/assets/img012.webp";
import img013 from "@/assets/img013.webp";
import img014 from "@/assets/img014.webp";
import img015 from "@/assets/img015.webp";
import img016 from "@/assets/img016.webp";
import img017 from "@/assets/img017.webp";
import img018 from "@/assets/img018.webp";
import img019 from "@/assets/img019.webp";
import img020 from "@/assets/img020.webp";
import img021 from "@/assets/img021.webp";
import img022 from "@/assets/img022.webp";
import img023 from "@/assets/img023.webp";
import img024 from "@/assets/img024.webp";
import img025 from "@/assets/img025.webp";
import img026 from "@/assets/img026.webp";
import img027 from "@/assets/img027.webp";
import img028 from "@/assets/img028.webp";
import img029 from "@/assets/img029.webp";
import img030 from "@/assets/img030.webp";
import img031 from "@/assets/img031.webp";
import img032 from "@/assets/img032.webp";
import img033 from "@/assets/img033.webp";
import img035 from "@/assets/img035.webp";
import img036 from "@/assets/img036.webp";
import img037 from "@/assets/img037.webp";
import img038 from "@/assets/img038.webp";

const images = [
  { src: img001, alt: "Trabalho realizado pela WF Bombas" },
  { src: img002, alt: "Trabalho realizado pela WF Bombas" },
  { src: img003, alt: "Trabalho realizado pela WF Bombas" },
  { src: img004, alt: "Trabalho realizado pela WF Bombas" },
  { src: img005, alt: "Trabalho realizado pela WF Bombas" },
  { src: img006, alt: "Trabalho realizado pela WF Bombas" },
  { src: img007, alt: "Trabalho realizado pela WF Bombas" },
  { src: img008, alt: "Trabalho realizado pela WF Bombas" },
  { src: img009, alt: "Trabalho realizado pela WF Bombas" },
  { src: img010, alt: "Trabalho realizado pela WF Bombas" },
  { src: img011, alt: "Trabalho realizado pela WF Bombas" },
  { src: img012, alt: "Trabalho realizado pela WF Bombas" },
  { src: img013, alt: "Trabalho realizado pela WF Bombas" },
  { src: img014, alt: "Trabalho realizado pela WF Bombas" },
  { src: img015, alt: "Trabalho realizado pela WF Bombas" },
  { src: img016, alt: "Trabalho realizado pela WF Bombas" },
  { src: img017, alt: "Trabalho realizado pela WF Bombas" },
  { src: img018, alt: "Trabalho realizado pela WF Bombas" },
  { src: img019, alt: "Trabalho realizado pela WF Bombas" },
  { src: img020, alt: "Trabalho realizado pela WF Bombas" },
  { src: img021, alt: "Trabalho realizado pela WF Bombas" },
  { src: img022, alt: "Trabalho realizado pela WF Bombas" },
  { src: img023, alt: "Trabalho realizado pela WF Bombas" },
  { src: img024, alt: "Trabalho realizado pela WF Bombas" },
  { src: img025, alt: "Trabalho realizado pela WF Bombas" },
  { src: img026, alt: "Trabalho realizado pela WF Bombas" },
  { src: img027, alt: "Trabalho realizado pela WF Bombas" },
  { src: img028, alt: "Trabalho realizado pela WF Bombas" },
  { src: img029, alt: "Trabalho realizado pela WF Bombas" },
  { src: img030, alt: "Trabalho realizado pela WF Bombas" },
  { src: img031, alt: "Trabalho realizado pela WF Bombas" },
  { src: img032, alt: "Trabalho realizado pela WF Bombas" },
  { src: img033, alt: "Trabalho realizado pela WF Bombas" },
  { src: img035, alt: "Trabalho realizado pela WF Bombas" },
  { src: img036, alt: "Trabalho realizado pela WF Bombas" },
  { src: img037, alt: "Trabalho realizado pela WF Bombas" },
  { src: img038, alt: "Trabalho realizado pela WF Bombas" },
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
              className="relative shrink-0 overflow-hidden rounded-sm bg-surface-darker"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-[320px] w-auto max-w-[500px] object-cover lg:h-[360px] lg:max-w-[600px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}