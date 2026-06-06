import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppBubble } from "@/components/site/WhatsAppBubble";
import { services, whatsappLink } from "@/config/site";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.label} na Zona Sul de SP | WF Bombas`;
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="bg-surface-darker py-20 text-on-dark lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-on-dark/70 hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-5xl">
            {service.label}
            <br />
            <span className="text-accent">na Zona Sul de SP</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-on-dark/80">
            Página em construção. Chame agora no WhatsApp e mande sua dúvida ou solicitação.
          </p>
          <a
            href={whatsappLink(`Olá! Tenho interesse em ${service.label.toLowerCase()}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground"
          >
            <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
          </a>
        </div>
      </section>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
