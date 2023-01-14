//here is the morse to english dictionary
const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

//this function takes the basic dictionary and just uses it
export function translateMorse(stringToTranslate = "") {
  let outstring = stringToTranslate
    .toUpperCase()
    .split("")
    .map((e) => {
      return morseCode[e] ? morseCode[e] : e;
    }) //this is an array of '-.-' etc
    .join(" ");
  console.log(outstring);
  return outstring;
}

//this one requires the dictionary object to be split, flipped and reversed before it will work
export function translateEnglish(stringToTranslate) {
  const englishCode = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [value, key])
  );
  let outstring = stringToTranslate

    .split(" ")
    .map((e) => {
      return englishCode[e] ? englishCode[e] : e;
    }) //this is an array of '-.-' etc
    .join("");

  return outstring;
}
