export const normalize = (v?: string | string[]) =>
  Array.isArray(v) ? v.join("\n") : v ?? "";

export const getArabic = (i: any) => normalize(i.arabic ?? i.text);
export const getMalayalam = (i: any) => normalize(i.malayalam);
export const getEnglish = (i: any) => normalize(i.english);
