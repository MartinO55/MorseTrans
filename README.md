# Morse Code Translator

## Outline

This task will require you to create a web page Morse Code translator.
The User Interface will have to look good but should remain simple (additional features, ie. sounds, lights, etc, should only be added once the MVP has been completed.)

- So for this I am going to try test driven devlopment for the javascript

## MVP

- Create a user interface that allows the user to either input some English text or some Morse Code
- Create JS functions that would allow the user to:

  - translate their English text into Morse Code
  - Morse Code into English text

- Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)

## Useful Resources

- [Iterate Object in JavaScript](https://www.javascripttutorial.net/object/iterate-object-in-javascript/)
- [Looping through objects keys and values in Javascript?](https://flexiple.com/loop-through-object-javascript/)

### Morse Code

```js
// A to Z in Morse Code
{
   "A": ".-",
   "B": "-...",
   "C": "-.-.",
   "D": "-..",
   "E": ".",
   "F": "..-.",
   "G": "--.",
   "H": "....",
   "I": "..",
   "J": ".---",
   "K": "-.-",
   "L": ".-..",
   "M": "--",
   "N": "-.",
   "O": "---",
   "P": ".--.",
   "Q": "--.-",
   "R": ".-.",
   "S": "...",
   "T": "-",
   "U": "..-",
   "W": ".--",
   "X": "-..-",
   "Y": "-.--",
   "Z": "--.."

   "0": "-----"
   "1": ".----"
   "2": "..---"
   "3": "...--"
   "4": "....-"
   "5": "....."
   "6": "-...."
   "7": "--..."
   "8": "---.."
   "9": "----."
}

```

## Submission

- Create an empty main branch
- Do all work in develop branch
- Add coach who is doing 1:1 as a contributor to your repo
- Tag coach in PR from develop branch into main for 1:1

## Expansion ideas

- Cover more than just A-Z characters
- Store translation in a json file
- Do fancy things with sound or flashes (only if you have heaps of spare time)
