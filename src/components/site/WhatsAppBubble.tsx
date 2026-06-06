import { MessageCircle } from "lucide-react";
import { whatsappLink, defaultWhatsAppMessage } from "@/config/site";

export function WhatsAppBubble() {
  return (
    <a
      href={whatsappLink(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition hover:scale-110 hover:shadow-xl"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-accent-foreground" />
    </a>
  );
}
