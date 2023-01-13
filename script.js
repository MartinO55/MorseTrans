import { translateMorse, translateEnglish } from "./functions.js";

document.querySelectorAll(".submitText").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let content = document.getElementById("englishTextContainer").value;

    //console.log(translateMorse(content)); //okay it works
    document.getElementById("translatedOutput").innerHTML =
      translateMorse(content);
  });
});
