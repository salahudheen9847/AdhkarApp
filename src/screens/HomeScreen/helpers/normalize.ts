export const normalize = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "").normalize("NFKD");
