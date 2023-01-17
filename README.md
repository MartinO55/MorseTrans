# Morse Code Translator

## Outline

This task was to create a web page Morse Code translator. For this I have tried a basic test driven devlopment for the javascript functions. As the addititon of testing blocks was added as a requirement to the MVP, it seemed teh logical step. The testing blocks added test some very basic issues (such as whether the function is a function), which were primarily used to proove that jest and node were working. In addition, the tests also checked whether or not the functions will return strings correctly, and whether or not those strings are correctly translated.

- The website has been created with two text area boxes to take inputs, with each text area having a different function attached to either translate morse to english or english to morse. If either of these boxes are passed inputs not included in the translation functions, those inputs are returned without alteration. the possible options for translation are currently english numbers and letters, although new options could be added to the website without impacting the functions simply by extending the object containing the translation key. During development it was considered that it might be worth hiding one of the text input areas with a mode toggle, but in the end I decided that hiding functionality from users behind additional clicks would be a mistake.

## MVP

- Create a user interface that allows the user to either input some English text or some Morse Code
- Create JS functions that would allow the user to:

  - translate their English text into Morse Code
  - Morse Code into English text

- Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)

## Links

Github: <https://github.com/MartinO55/MorseTrans>

Live website: <https://martino55.github.io/MorseTrans/>

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
