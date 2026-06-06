import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppBubble } from "@/components/site/WhatsAppBubble";
import { areas, whatsappLink } from "@/config/site";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function AreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = areas.find((a) => a.slug === slug);

  useEffect(() => {
    if (area) {
      document.title = `Bomba d'água em ${area.label} | WF Bombas`;
    }
  }, [area]);

  if (!area) {
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
            Bomba d'água em
            <br />
            <span className="text-accent">{area.label}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-on-dark/80">
            Atendemos {area.label} e bairros vizinhos. Página em construção, chame no WhatsApp agora.
          </p>
          <a
            href={whatsappLink(`Olá! Sou de ${area.label} e preciso de atendimento para minha bomba d'água.`)}
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
