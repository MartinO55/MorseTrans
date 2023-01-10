//import { it } from "node:test";//this keeps popping up, and causes errors when it does
import { translateMorse, translateEnglish } from "./script";

/*
    It should have a test driven development cycle

    It should take a string and return a string
    It should be a function that returns a translation of Morse code to english(roman alphabet?)
    It should put one space between morse letters and one space between english words
    if passed no string it should return an empty string
    if passed bad data it should fail gracefully 

    it should translate numbers
*/

describe("translateMorse", () => {
  it("should be a function", () => {
    expect(typeof translateMorse).toBe("function");
  });

  it("should return a string if passed a string", () => {
    const answer = translateMorse("string");

    expect(typeof answer).toBe("string");
  });
});
