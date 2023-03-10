//import { it } from "node:test";//this keeps popping up, and causes errors when it does
import { translateMorse, translateEnglish } from "./functions.js";

/*
    It should have a test driven development cycle
    It should take a string and return a string
    if passed no string it should return an empty string

    It should be a function that returns a translation of Morse code to english(roman alphabet?)
    It should put one space between morse letters and one space between english words
    
    if passed bad data it should fail gracefully 

    it should translate numbers
    need 2 describe blocks
*/
//mostly used to check if node is functioning

describe("translateMorse", () => {
  it("should be a function", () => {
    expect(typeof translateMorse).toBe("function");
  });

  it("should return a string if passed a string", () => {
    const answer = translateMorse("string");

    expect(typeof answer).toBe("string");
  });

  it("should return an empty string if passed no input", () => {
    const answer = translateMorse();

    expect(answer).toBe("");
  });

  it("should translate an english string to morse", () => {
    expect(translateMorse("a")).toBe(".-");
    expect(translateMorse("b")).toBe("-...");
    expect(translateMorse("Hi")).toBe(".... ..");
    expect(translateMorse("0")).toBe("-----");
  });
});

describe("translateEnglish", () => {
  it("should be a function", () => {
    expect(typeof translateEnglish).toBe("function");
  });

  it("should return a string if passed a string", () => {
    const answer = translateEnglish("string");

    expect(typeof answer).toBe("string");
  });

  it("should translate an morse string to english", () => {
    expect(translateEnglish(".-")).toBe("A");
    expect(translateEnglish("-...")).toBe("B");
    expect(translateEnglish(".... ..")).toBe("HI");
    expect(translateEnglish("-----")).toBe("0");
  });
});
