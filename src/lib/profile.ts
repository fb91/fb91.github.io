/**
 * Datos personales del sitio. Editá acá y se actualiza todo.
 */

export const profile = {
  name: "Fabricio Bianchi",
  /**
   * Email de contacto que se muestra en las políticas de privacidad.
   * Si queda vacío, `npm run build` falla a propósito: la política nunca se publica sin contacto.
   */
  contactEmail: "fabriciob91@gmail.com",
} as const;

export type SocialLink = {
  label: string;
  url: string;
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/fabricio-bianchi/" },
  { label: "GitHub", url: "https://github.com/fb91" },
  { label: "Instagram", url: "https://www.instagram.com/fabri.b91" },
];

/** Rutas fijas del sitio. Las URLs de las políticas no deben cambiar una vez publicadas. */
export const routes = {
  home: "/",
  recuerdosPrivacy: "/chatgpt/recuerdos-para-imprimir/privacidad/",
} as const;
