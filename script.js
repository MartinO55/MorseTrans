import { translateMorse, translateEnglish } from "./functions.js";

//displays the morse in a separate section
document.querySelectorAll(".submitEnglish").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let content = document.getElementById("englishTextContainer").value;

    //console.log(translateMorse(content)); //okay it works
    document.getElementById("translatedMorseOutput").innerHTML =
      translateMorse(content);
  });
});

document.querySelectorAll(".submitMorse").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let content = document.getElementById("morseTextContainer").value;
    //console.log(event);
    //console.log(translateEnglish(content)); //okay it works
    document.getElementById("translatedEnglishOutput").innerHTML =
      translateEnglish(content);
  });
});
