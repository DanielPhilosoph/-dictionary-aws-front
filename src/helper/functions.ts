export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function getRandomPartOfSpeech() {
  const partOfSpeechMap = [
    "adverb",
    "noun",
    "verb",
    "preposition",
    "conjunction",
    "interjection",
    "pronoun",
  ];
  return partOfSpeechMap[getRandomInt(partOfSpeechMap.length - 1)];
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function shortPosToFullPos(pos: string) {
  const partOfSpeechMap = [
    { "adv.": "adverb" },
    { "n.": "noun" },
    { "v.": "verb" },
    { "prep.": "preposition" },
    { "conj.": "conjunction" },
    { "interj.": "interjection" },
    { "pron.": "pronoun" },
  ];
  let returnedPartOfSpeech = "";
  partOfSpeechMap.forEach((partOfSpeech, i) => {
    if (Object.keys(partOfSpeech)[0] === pos) {
      returnedPartOfSpeech = Object.values(partOfSpeech)[0];
    }
  });
  return returnedPartOfSpeech;
}

export function light() {
  document.documentElement.style.setProperty("--body-background", "white");
  document.documentElement.style.setProperty(
    "--search-div-background-color",
    "rgb(92, 131, 190)"
  );
  document.documentElement.style.setProperty("--search-button-bg", "#195599");
  document.documentElement.style.setProperty(
    "--search-button-bg-hover",
    "#123e70"
  );
  document.documentElement.style.setProperty(
    "--welcome-background",
    "rgb(25, 84, 151)"
  );
  document.documentElement.style.setProperty(
    "--search-button-color",
    "whitesmoke"
  );
  document.documentElement.style.setProperty(
    "--welcome-div-color",
    "whitesmoke"
  );
  document.documentElement.style.setProperty(
    "--word-div-background",
    "rgb(166, 201, 230)"
  );
  document.documentElement.style.setProperty("--pos-h5-color", "#195599");
  document.documentElement.style.setProperty("--no-words-color", "#195599");
  document.documentElement.style.setProperty(
    "--navbar-links-color-main",
    "rgb(233, 233, 233)"
  );
  document.documentElement.style.setProperty(
    "--navbar-links-color",
    "rgba(255, 255, 255, 0.55)"
  );
  document.documentElement.style.setProperty(
    "--navbar-links-color-hover",
    "rgb(190, 190, 190)"
  );
  document.documentElement.style.setProperty(
    "--recent-words-header-color",
    "#195599"
  );

  document.documentElement.style.setProperty("--search-input-bg", "white");
  document.documentElement.style.setProperty(
    "--part-of-speech-input-bg",
    "white"
  );
  document.documentElement.style.setProperty("--search-input-color", "black");
  document.documentElement.style.setProperty(
    "--part-of-speech-input-color",
    "black"
  );
}

export function dark() {
  console.log("im dark function");
  document.documentElement.style.setProperty("--body-background", "#0d0b21");
  document.documentElement.style.setProperty(
    "--search-div-background-color",
    "#0d0b21"
  );
  document.documentElement.style.setProperty("--search-button-bg", "#352aad");
  document.documentElement.style.setProperty(
    "--search-button-bg-hover",
    "#4e45ad"
  );
  document.documentElement.style.setProperty("--welcome-background", "#211d54");
  document.documentElement.style.setProperty(
    "--search-button-color",
    "#9c95fc"
  );
  document.documentElement.style.setProperty("--welcome-div-color", "#c4c0fa");
  document.documentElement.style.setProperty(
    "--word-div-background",
    "#4d489c"
  );
  document.documentElement.style.setProperty("--pos-h5-color", "#9e9bcc");
  document.documentElement.style.setProperty("--search-input-bg", "#4842ad");
  document.documentElement.style.setProperty(
    "--part-of-speech-input-bg",
    "#4842ad"
  );
  document.documentElement.style.setProperty("--search-input-color", "#c4c0fa");
  document.documentElement.style.setProperty(
    "--part-of-speech-input-color",
    "gray"
  );
}
