export type ManqusMoulidEnglishItem =
  | {
      id: number;
      type: "text";
      text: string;
      start: number;
      end: number;
    }
  | {
      id: number;
      type: "box";
      right: string;
      left: string;
      start: number;
      end: number;
    };


export const ManqusmoulidEnglish: ManqusMoulidEnglishItem[] = [
  {
    id: 1,
    type: "text",
    text: "In the Name of Allah, the Most Merciful, the Most Compassionate.",
    start: 0,
    end: 1,
  },
  {
    id: 2,
    type: "text",
    text:
      "Glory be to Him who caused the moon of the Prophet of guidance to rise in the month of Rabiʿ al-Awwal, " +
      "created his light before the creation of the worlds, and named him Muhammad.",
    start: 1,
    end: 2,
  },
  {
    id: 3,
    type: "text",
    text:
      "He brought him forth at the appointed time as He had decreed, " +
      "and clothed him in a robe of beauty which He granted to none other.",
    start: 2,
    end: 3,
  },
  {
    id: 4,
    type: "text",
    text:
      "He was born with a face that put even the moon and the brightest stars to shame; " +
      "through him Adam (peace be upon him) sought intercession and took pride in being his father.",
    start: 3,
    end: 4,
  },
  {
    id: 5,
    type: "text",
    text:
      "Through him Nuh (Noah), peace be upon him, sought help and was saved from destruction.",
    start: 4,
    end: 5,
  },
  {
    id: 6,
    type: "text",
    text:
      "He was in the loins of Ibrahim (Abraham), peace be upon him, " +
      "when he was cast into the fire, and its flames were extinguished and subdued.",
    start: 5,
    end: 6,
  },
  {
    id: 7,
    type: "text",
    text:
      "When his mother Aminah conceived him, she saw the angels of the heavens coming to her in support, " +
      "and the prophets entering upon her, saying to her:",
    start: 6,
    end: 7,
  },
  {
    id: 8,
    type: "text",
    text:
      "“When you give birth to the sun of success and guidance, name him Muhammad.”",
    start: 7,
    end: 8,
  },
  {
    id: 9,
    type: "text",
    text:
      "Allah, the Exalted, says: ‘There has certainly come to you a Messenger from among yourselves; " +
      "grievous to him is your suffering; he is deeply concerned for you, and toward the believers he is kind and merciful.’",
    start: 8,
    end: 9,
  },
  {
    id: 10,
    type: "text",
    text:
      "The Prophet ﷺ said: ‘I was a light in the presence of Allah, the Exalted, " +
      "two thousand years before Adam was created.’",
    start: 9,
    end: 10,
  },
  {
    id: 11,
    type: "text",
    text:
      "That light glorified Allah, and the angels glorified Him with its glorification. " +
      "When Allah, the Exalted, created Adam (peace be upon him), He placed that light into his clay.",
    start: 10,
    end: 11,
  },
  {
    id: 12,
    type: "text",
    text:
      "Allah then sent me down within the loins of Adam to the earth, " +
      "and placed me in the Ark within the loins of Nuh (Noah), peace be upon him.",
    start: 11,
    end: 12,
  },
  {
    id: 13,
    type: "text",
    text:
      "He placed me in the noble loins of Ibrahim (Abraham), peace be upon him, when he was cast into the fire, " +
      "and my Lord continued transferring me through honored and exalted lineages.",
    start: 12,
    end: 13,
  },
  {
    id: 14,
    type: "text",
    text:
      "Until He brought me into pure and virtuous wombs, and brought me forth through my parents, " +
      "who never united in any unlawful relationship.",
    start: 13,
    end: 14,
  },



  /* 🔹 BOX STARTS */
  {
    id: 15,
    type: "box",
    right: "Blessings upon the Prophet and peace upon the Messenger",
    left: "The intercessor of al-Abtah and the beloved of the Arabs",
    start: 6,
    end: 7,
  },
  {
    id: 16,
    type: "box",
    right: "You rise among us like the full moon among the stars",
    left: "Rather, you are nobler than them, O my master, the best of all prophets",
    start: 7,
    end: 8,
  },
  {
    id: 17,
    type: "box",
    right: "We have never seen among mother or father",
    left: "Anyone equal to your beauty, O my master, the best of all prophets",
    start: 8,
    end: 9,
  },
  {
    id: 18,
    type: "box",
    right: "You will save us tomorrow through your intercession",
    left: "Who do we have like you, O my master, the best of all prophets?",
    start: 9,
    end: 10,
  },
  {
    id: 19,
    type: "box",
    right: "I have committed sins beyond count and number",
    left: "Of them I complain to you, O my master, the best of all prophets",
    start: 10,
    end: 11,
  },
  {
    id: 20,
    type: "box",
    right: "We hope for the cup of your Basin on the Day of Thirst",
    left: "O my master, the best of all prophets",
    start: 11,
    end: 12,
  },
];
