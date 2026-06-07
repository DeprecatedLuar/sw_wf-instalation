import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { site, services, areas, whatsappLink, defaultWhatsAppMessage } from "@/config/site";
import logo from "@/assets/logo.webp";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled ? "bg-surface-darker shadow-lg" : "bg-surface-dark"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-on-dark">
          <img src={logo} alt="WF Bombas" className="h-10 w-auto" />
          <div className="font-display text-base font-semibold leading-tight tracking-tight">
            <div>WF Bombas</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-on-dark/60">
              Instalação · Manutenção
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-on-dark hover:text-accent">
              Serviços <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-72 pt-3">
                <div className="rounded-sm border border-border bg-card p-2 shadow-2xl">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/servicos/${s.slug}`}
                      className="block rounded-sm px-3 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-on-dark hover:text-accent">
              Áreas de Atendimento <ChevronDown className="h-4 w-4" />
            </button>
            {areasOpen && (
              <div className="absolute left-0 top-full w-60 pt-3">
                <div className="rounded-sm border border-border bg-card p-2 shadow-2xl">
                  {areas.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/areas/${a.slug}`}
                      className="block rounded-sm px-3 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href={`tel:${site.phoneE164}`}
            className="flex items-center gap-2 font-display text-base font-bold text-on-dark hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>

          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </nav>

        <button
          className="text-on-dark lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-surface-darker px-4 py-4 lg:hidden">
          <details className="mb-2">
            <summary className="cursor-pointer py-2 text-sm font-semibold text-on-dark">
              Serviços
            </summary>
            <div className="ml-3 mt-1 flex flex-col gap-1">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="py-1.5 text-sm text-on-dark/80"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </details>
          <details className="mb-3">
            <summary className="cursor-pointer py-2 text-sm font-semibold text-on-dark">
              Áreas de Atendimento
            </summary>
            <div className="ml-3 mt-1 flex flex-col gap-1">
              {areas.map((a) => (
                <Link
                  key={a.slug}
                  to={`/areas/${a.slug}`}
                  className="py-1.5 text-sm text-on-dark/80"
                  onClick={() => setOpen(false)}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </details>
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}