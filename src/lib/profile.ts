/**
 * Datos personales del sitio. Editá acá y se actualiza todo.
 */

export const profile = {
  name: "Fabricio Bianchi",
  title: "Ingeniero en Sistemas de Información",
} as const;

/** Primer trabajo formal (1 de junio de 2014): de acá salen los años de experiencia. */
const careerStart = { year: 2014, month: 5, day: 1 };

export const yearsOfExperience = (now = new Date()) => {
  const anniversary = new Date(now.getFullYear(), careerStart.month, careerStart.day);
  return now.getFullYear() - careerStart.year - (now < anniversary ? 1 : 0);
};

/**
 * WhatsApp. El número nunca está en texto plano (ni en el HTML ni en el repo): va codificado
 * y se muestra recién después de comprobar que quien lo pide es una persona.
 * Para cambiarlo, generá el código nuevo con (solo dígitos, con 549 adelante):
 *   node -e "const k='fb91';console.log(btoa([...process.argv[1]].map((c,i)=>String.fromCharCode(c.charCodeAt(0)^k.charCodeAt(i%4))).join('')))" 549XXXXXXXXXX
 */
export const whatsapp = {
  sealed: "U1YAAlJTDwNXUwkFUw==",
  key: "fb91",
  /** Mensaje con el que se abre el chat. */
  greeting: "Hola Fabricio, vi tu portfolio y quería consultarte por un proyecto.",
} as const;

export type SocialIcon = "linkedin" | "github" | "whatsapp";

export type SocialLink = {
  label: string;
  url: string;
  icon: SocialIcon;
  /** Red principal: en el encabezado va con texto junto a WhatsApp; las demás, agrupadas y solo con ícono en el celular. */
  primary?: boolean;
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/fabricio-bianchi/", icon: "linkedin", primary: true },
  { label: "GitHub", url: "https://github.com/fb91", icon: "github" },
];

/** Rutas fijas del sitio. */
export const routes = {
  home: "/",
} as const;
