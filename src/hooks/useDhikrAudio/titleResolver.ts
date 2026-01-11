export type TitleAudio = {
  audio: string;
  title: string;
};

export function resolveTitleAndAudio(
  mode: "dhikr" | "manqus" | "bader" | "qaseeda",
  type?: string
): TitleAudio {
  if (mode === "dhikr") {
    switch (type) {
      case "duaMarichavark":
        return { audio: "dua_marichavark.mp3", title: "🙏 ദുആ മറിച്ചാർക്ക്" };

      case "duaQabar":
        return { audio: "dua_qabar.mp3", title: "🪦 ഖബർ സിയാറ" };

      case "haddad":
        return { audio: "haddad.mp3", title: "📿 ഹദ്ദാദ് റത്തീബ്" };

      case "asmaulHusna":
        return { audio: "asmaul_husna.mp3", title: "🌟 അസ്മാഉൽ ഹുസ്ന" };

      case "nariyathSwalath":
        return { audio: "nariyath_swalath.mp3", title: "🕌 നാരിയത്ത് സ്വലാത്ത്" };

      case "salawatAlFatih":
        return { audio: "salawat_al_fatih.mp3", title: "💫 സലവാത്തുൽ ഫാത്വിഹ്" };

      case "thajuSwalath":
        return { audio: "thaju_swalath.mp3", title: "🌙 താജു സ്വലാത്ത്" };

      case "ramadanAdhkar":
        return { audio: "ramadan_adhkar.mp3", title: "🌙 റമദാൻ അദ്കാർ" };
    }
  }

  if (mode === "manqus")
    return { audio: "manqus_moulid.mp3", title: "📖 മൻഖൂസ് മൗലിദ്" };

  if (mode === "bader")
    return { audio: "bader_moulid.mp3", title: "📜 ബാദർ മൗലിദ്" };

  if (mode === "qaseeda")
    return { audio: "qaseedathul_burda.mp3", title: "📜 ഖസീദത്തുൽ ബുർദ" };

  return { audio: "", title: "" };
}
