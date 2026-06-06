export const site = {
  name: "WF Instalação e Manutenção de Bombas",
  shortName: "WF Bombas",
  phone: "(11) 96806-6749",
  phoneE164: "+5511968066749",
  whatsapp: "5511968066749",
  address: "R. Dr. José Sílvio de Camargo, Pedreira, São Paulo - SP, 04476-070",
  city: "São Paulo",
  region: "SP",
  postalCode: "04476-070",
  gbpUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJud6Cmw1ZzpQRUKr4yrgCyi8",
  email: "",
  offer:
    "Diagnóstico gratuito e atendimento em até 2h na Zona Sul de SP",
} as const;

export const services = [
  { slug: "instalacao-bomba-dagua", label: "Instalação de bomba d'água" },
  { slug: "manutencao-preventiva", label: "Manutenção preventiva" },
  { slug: "conserto-bomba", label: "Conserto de bomba" },
  { slug: "substituicao-bomba", label: "Substituição de bomba" },
  { slug: "bomba-pressurizacao", label: "Bomba de pressurização" },
  { slug: "bomba-submersa", label: "Bomba submersa" },
  { slug: "bomba-poco-artesiano", label: "Bomba de poço artesiano" },
] as const;

export const areas = [
  { slug: "pedreira", label: "Pedreira" },
  { slug: "cidade-dutra", label: "Cidade Dutra" },
  { slug: "grajau", label: "Grajaú" },
  { slug: "campo-grande", label: "Campo Grande" },
  { slug: "interlagos", label: "Interlagos" },
  { slug: "cidade-ademar", label: "Cidade Ademar" },
  { slug: "santo-amaro", label: "Santo Amaro" },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];
export type AreaSlug = (typeof areas)[number]["slug"];

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Olá! Vim pelo site e preciso de atendimento para minha bomba d'água.";