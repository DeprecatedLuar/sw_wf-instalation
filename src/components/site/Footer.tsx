import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { site, services, areas, whatsappLink, defaultWhatsAppMessage } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-surface-darker text-on-dark">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent font-display font-bold text-accent-foreground">
                WF
              </div>
              <span className="font-display text-lg font-semibold">WF Bombas</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-on-dark/70">
              Instalação e manutenção de bombas d'água para imóveis residenciais,
              condomínios e comércios na Zona Sul de São Paulo.
            </p>
          </div>

          <div>
            <div className="font-display text-sm font-semibold uppercase tracking-wider text-on-dark/90">
              Serviços
            </div>
            <ul className="mt-4 space-y-2 text-sm text-on-dark/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/servicos/${s.slug}`} className="hover:text-accent">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold uppercase tracking-wider text-on-dark/90">
              Áreas Atendidas
            </div>
            <ul className="mt-4 space-y-2 text-sm text-on-dark/70">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link to={`/areas/${a.slug}`} className="hover:text-accent">
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold uppercase tracking-wider text-on-dark/90">
              Contato
            </div>
            <ul className="mt-4 space-y-3 text-sm text-on-dark/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={site.gbpUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {site.address}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneE164}`} className="flex items-center gap-2 font-bold hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4 text-accent" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-on-dark/50">
          © {new Date().getFullYear()} WF Instalação e Manutenção de Bombas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}