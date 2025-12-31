// 🔑 All allowed YouTube link types
export type YoutubeType =
  | "duaMarichavark"
  | "duaQabar"
  | "haddad"
  | "asmaulHusna"
  | "manqus";

// ▶️ YouTube links mapped strictly to types
export const youtubeLinks: Record<YoutubeType, string> = {
  duaMarichavark: "https://www.youtube.com/watch?v=a5tbaxpei2c",
  duaQabar: "https://youtu.be/1qwJyfT-W_0?si=6NWGmH6MFeLvDkY9",
  haddad: "https://youtu.be/udcpdWbV3lc?si=wwKUPui4bPccBcUN",
  asmaulHusna: "https://youtu.be/PGrirHLtTNU?si=qQga3PUWKUG2GS17",
  manqus: "https://youtu.be/PGrirHLtTNU?si=qQga3PUWKUG2GS17",
};
