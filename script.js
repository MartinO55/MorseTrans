import { translateMorse, translateEnglish } from "./functions.js";

document.querySelectorAll(".submitText").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let content = document.getElementById("englishTextContainer").value;
    translateMorse(content);
  });
});

// export function translateMorse(stringToTranslate = "") {
//   const morseCode = {
//     A: ".-",
//     B: "-...",
//     C: "-.-.",
//     D: "-..",
//     E: ".",
//     F: "..-.",
//     G: "--.",
//     H: "....",
//     I: "..",
//     J: ".---",
//     K: "-.-",
//     L: ".-..",
//     M: "--",
//     N: "-.",
//     O: "---",
//     P: ".--.",
//     Q: "--.-",
//     R: ".-.",
//     S: "...",
//     T: "-",
//     U: "..-",
//     W: ".--",
//     X: "-..-",
//     Y: "-.--",
//     Z: "--..",
//     0: "-----",
//     1: ".----",
//     2: "..---",
//     3: "...--",
//     4: "....-",
//     5: ".....",
//     6: "-....",
//     7: "--...",
//     8: "---..",
//     9: "----.",
//   };
//   let outstring = stringToTranslate
//     .toUpperCase()
//     .split("")
//     .map((e) => {
//       return morseCode[e] ? morseCode[e] : e;
//     }) //this is an array of '-.-' etc
//     .join(" ");
//   return outstring;
// }

// export function translateEnglish(stringToTranslate) {
//   const morseCode = {
//     A: ".-",
//     B: "-...",
//     C: "-.-.",
//     D: "-..",
//     E: ".",
//     F: "..-.",
//     G: "--.",
//     H: "....",
//     I: "..",
//     J: ".---",
//     K: "-.-",
//     L: ".-..",
//     M: "--",
//     N: "-.",
//     O: "---",
//     P: ".--.",
//     Q: "--.-",
//     R: ".-.",
//     S: "...",
//     T: "-",
//     U: "..-",
//     W: ".--",
//     X: "-..-",
//     Y: "-.--",
//     Z: "--..",
//     0: "-----",
//     1: ".----",
//     2: "..---",
//     3: "...--",
//     4: "....-",
//     5: ".....",
//     6: "-....",
//     7: "--...",
//     8: "---..",
//     9: "----.",
//   };
//   //not sure if this will work
//   let outstring = stringToTranslate
//     .toUpperCase()
//     .split(" ")
//     .map((e) => {
//       (e) => morseCode[e];
//     })
//     .join("");
//   return outstring;
// }
