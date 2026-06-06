import { Phone, MessageCircle } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/config/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-surface-darker lg:hidden">
      <a
        href={`tel:${site.phoneE164}`}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-on-dark"
      >
        <Phone className="h-4 w-4" />
        Ligar
      </a>
      <a
        href={whatsappLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-accent py-3.5 text-sm font-semibold text-accent-foreground"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}