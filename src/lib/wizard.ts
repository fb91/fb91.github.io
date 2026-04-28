export type Plan = "estatico" | "cms";

export type WizardData = {
  plan: Plan | "";
  // negocio
  identificador: string;
  nombre: string;
  rubro: "restaurant" | "clinic" | "legal" | "generic" | "";
  ciudad: string;
  direccion: string;
  // contacto
  whatsapp: string;
  whatsappMensaje: string;
  telefono: string;
  instagram: string;
  facebook: string;
  emailCliente: string;
  nombreCliente: string;
  // horarios
  horarioLunVie: string;
  horarioSab: string;
  horarioDom: string;
  // mapa
  mapsEmbed: string;
  // estilo
  colorPrimario: string;
  colorSecundario: string;
  // textos
  heroSubtitulo: string;
  heroCta: string;
  aboutText: string;
  // contenido
  servicios: string;
  resenias: string;
  comentarios: string;
};

export const initialData: WizardData = {
  plan: "",
  identificador: "",
  nombre: "",
  rubro: "",
  ciudad: "",
  direccion: "",
  whatsapp: "",
  whatsappMensaje: "Hola! Vi su página y quiero más información",
  telefono: "",
  instagram: "",
  facebook: "",
  emailCliente: "",
  nombreCliente: "",
  horarioLunVie: "",
  horarioSab: "",
  horarioDom: "",
  mapsEmbed: "",
  colorPrimario: "",
  colorSecundario: "",
  heroSubtitulo: "",
  heroCta: "",
  aboutText: "",
  servicios: "",
  resenias: "",
  comentarios: "",
};

export const STORAGE_KEY = "fabri-web-wizard-v1";
