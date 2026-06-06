import { Link } from "react-router-dom";
import {
  MessageCircle,
  Phone,
  ShieldCheck,
  Clock,
  MapPin,
  Wrench,
  Droplets,
  Gauge,
  ArrowDownToLine,
  Replace,
  Settings2,
  Hammer,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useEffect } from "react";
import heroPump from "@/assets/hero-pump.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppBubble } from "@/components/site/WhatsAppBubble";
import { PortfolioCarousel } from "@/components/site/PortfolioCarousel";
import { ReviewsWidget } from "@/components/site/ReviewsWidget";
import {
  site,
  services,
  areas,
  whatsappLink,
  defaultWhatsAppMessage,
} from "@/config/site";

const serviceIcons: Record<string, typeof Wrench> = {
  "instalacao-bomba-dagua": Wrench,
  "manutencao-preventiva": Settings2,
  "conserto-bomba": Hammer,
  "substituicao-bomba": Replace,
  "bomba-pressurizacao": Gauge,
  "bomba-submersa": ArrowDownToLine,
  "bomba-poco-artesiano": Droplets,
};

const serviceBlurbs: Record<string, string> = {
  "instalacao-bomba-dagua":
    "Dimensionamento, instalação e teste de bombas para caixa d'água, cisterna e poço.",
  "manutencao-preventiva":
    "Revisão programada para evitar parada de água e queima do motor.",
  "conserto-bomba":
    "Diagnóstico e reparo de bombas que não ligam, perdem pressão ou superaquecem.",
  "substituicao-bomba":
    "Troca de equipamento com avaliação técnica antes da compra.",
  "bomba-pressurizacao":
    "Solução para chuveiro fraco e baixa pressão em casas e apartamentos.",
  "bomba-submersa":
    "Instalação e manutenção de bombas submersíveis para poço e cisterna.",
  "bomba-poco-artesiano":
    "Serviço completo para captação de poço, do motor ao quadro de comando.",
};

export default function Home() {
  useEffect(() => {
    document.title = "WF Bombas | Instalação e Manutenção de Bombas d'Água | Zona Sul SP";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-surface-darker">
        <img
          src={heroPump}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-surface-darker via-surface-darker/95 to-surface-dark/80 md:from-surface-darker/95 md:via-surface-darker/70 md:to-surface-dark/60"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl text-on-dark">
            <div className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <Clock className="h-3.5 w-3.5" />
              Atendimento em até 2h na Zona Sul
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Instalação e manutenção
              <br />
              de bombas d'água
              <br />
              <span className="text-accent">na Zona Sul de SP</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-dark/80 sm:text-lg">
              Pressão baixa, bomba queimada ou caixa d'água sem encher? Vamos até o
              local, diagnosticamos o problema e resolvemos no mesmo dia sempre que
              possível. Atendemos imóveis residenciais, condomínios e comércios.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition hover:brightness-110 sm:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
              <a
                href={`tel:${site.phoneE164}`}
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-on-dark hover:bg-white/10 sm:text-base"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-dark/75">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Residencial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Condominial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                Comercial
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            {
              icon: ShieldCheck,
              title: "Diagnóstico gratuito",
              desc: "Sem custo de visita na primeira chamada na Zona Sul.",
            },
            {
              icon: Clock,
              title: "Resposta rápida",
              desc: "Atendimento em até 2h em áreas atendidas.",
            },
            {
              icon: Wrench,
              title: "Bombas de todos os tipos",
              desc: "Pressurizadoras, centrífugas e submersas.",
            },
            {
              icon: MapPin,
              title: "Zona Sul de São Paulo",
              desc: "Pedreira, Grajaú, Santo Amaro e região.",
            },
          ].map((t) => (
            <div key={t.title} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/5 text-secondary">
                <t.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-foreground">
                  {t.title}
                </div>
                <div className="mt-0.5 text-sm text-muted-foreground">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Serviços
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground lg:text-4xl">
                O que resolvemos para você
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Cada serviço inclui diagnóstico técnico antes do orçamento. Você só aprova quando souber o que e por que precisa ser feito.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug] ?? Wrench;
              return (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="group flex flex-col rounded-sm border border-border bg-card p-6 transition hover:border-secondary hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {s.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {serviceBlurbs[s.slug]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2">
                    Ver detalhes <ArrowRight className="h-4 w-4 transition-all" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <PortfolioCarousel />
      <ReviewsWidget />

      {/* About */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 lg:px-8">
          <div className="md:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Sobre a WF Bombas
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Quem chega na sua casa para resolver
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/85 md:col-span-7 lg:text-base">
            <p>
              A WF Bombas é uma empresa local de Pedreira, Zona Sul de São Paulo,
              focada em um único trabalho: deixar a água do seu imóvel funcionando.
            </p>
            <p>
              Trabalhamos com bombas centrífugas, pressurizadoras e submersas em
              imóveis residenciais, condomínios e comércios da região. Cada
              atendimento começa com diagnóstico no local. Só depois passamos o
              orçamento, com preço fechado e prazo claro.
            </p>
            <p>
              Atendemos pelo WhatsApp e por telefone, das 8h às 19h. Para emergências,
              avalie o caso pelo WhatsApp e respondemos com o tempo de chegada.
            </p>
            <a
              href={site.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
            >
              Ver perfil no Google <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Áreas de Atendimento
          </div>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold text-foreground lg:text-4xl">
            Bairros da Zona Sul que atendemos
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Operamos a partir de Pedreira com tempo de deslocamento curto para bairros próximos. Se sua região não está listada, chame no WhatsApp para confirmar disponibilidade.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <Link
                key={a.slug}
                to={`/areas/${a.slug}`}
                className="group flex items-center justify-between rounded-sm border border-border bg-card px-4 py-4 transition hover:border-secondary hover:shadow-sm"
              >
                <span className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="font-display text-sm font-semibold text-foreground">
                    {a.label}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-secondary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative isolate overflow-hidden bg-surface-darker py-16 text-on-dark lg:py-24">
        <div
          className="absolute inset-0 bg-gradient-to-tr from-surface-darker via-surface-dark to-primary opacity-90"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold leading-tight lg:text-5xl">
            Bomba com problema?
            <br />
            <span className="text-accent">Resolvemos hoje.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-on-dark/80">
            Mande uma mensagem com o que está acontecendo. Em poucos minutos respondemos com o tempo de chegada e os próximos passos.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-base font-semibold text-accent-foreground transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
            <a
              href={`tel:${site.phoneE164}`}
              className="inline-flex items-center gap-2 rounded-sm border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-on-dark hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
