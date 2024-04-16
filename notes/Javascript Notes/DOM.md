# DOM
- shows the tree of the flow of the document
- browser will not re-draw the visual appearance of the DOM ("repainting") until the code finishes running
  - why? - because you might make 1000+ changes (eg: via a loop). Pointless to redraw each change


## Selecting Elements
- Use `Document.querySelector` or `Document.querySelectorAll`
- To get element by `ID`:
```js
const $board = document.querySelector("#board");
```

If lazy, can use **bind** to not have to type out "querySelector" each time when selecting DOM element:
```js
const qs = document.querySelector.bind(document);

const a = qs("#a");
// same as
const a = document.querySelector("#a");
```

## Data Attributes
- To associate data with a DOM element (eg: x,y coordinates)
  - 1. Put in an ID
    - `<div id = "c-7-4">`
    - However, it is ugly and not globally unique
  - 2. Put in a Class
    - `<div class = "c-7-4">`
    - Ugly
  - 3. Use Data Attributes
    - `<div data-x = "7" data-y = "4">`
    - To find in JS: `myElem.getAttribute("data-x")`
  - 4. Use `.dataset`
    - To find in JS: `myElem.dataset.x`


# Event Delegation

- Using loops to add event listeners make it hard to manage adding/removing event listeners
- Event Delegation: Allows you to register an event on a larger area than just
the button so that you don't have to select each individual element when you want to change something

- The Event Target is whatever I have clicked on: TODO: look into Event Target
  - clicking on a button = expected action
  - clicking on whitespace next to button = returns undefined

```js
const $btnArea = document.querySelectorAll("#Letters");
$btnArea.addEventListener("click", handleClick);

function handleClick(evt){
  if(!evt.target.matches("button")) return;

  addScore(evt.target.value);
}
```

## Removing Event Listeners

- When removing Event Listeners, need to remove the SAME function (eg; the SAME identity)
  - ASSIGN the function called by the event listener to a VARIABLE

```js
//reference snowman game

class SnowmanUI {
  constructor(maxWrong = 5) {
    //1 bound copy for event listeners so that add and remove event listeners are referencing the same function
    this.handleGuessBound = this.handleGuess.bind(this);

    this.addKeyboard();
  }

  addKeyboard() {
    console.debug("addKeyboard");

    const $letters = [..."abcdefghijklmnopqrstuvwxyz"].map(
      letter => {
        const $letter = document.createElement("button");
        $letter.classList.add("letter");
        $letter.dataset.letter = letter;
        $letter.innerText = letter;
        return $letter;
      },
    );

    this.$keyboard.append(...$letters);

    //this is a diff identity than what we're passing into removeEventListener
    this.$keyboard.addEventListener("click", this.handleGuessBound);
  }

  guessLetter(letter) {
    console.debug("guessLetter", letter);

      //removing the event listener by ID
      this.$keyboard.removeEventListener("click", this.handleGuessBound);
    }
  }

```

## Disable a button

- select the event target and set disable to true ```letter.disable = true```

## Toggle Classes

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.mystyle {
  width: 100%;
  padding: 25px;
  background-color: coral;
  color: white;
  font-size: 25px;
  box-sizing: border-box;
}
</style>
</head>
<body>

<p>Click the "Try it" button to toggle between adding and removing the "mystyle" class name of the DIV element:</p>

<button onclick="myToggleFunction()">Try it</button>

<div id="myDIV">
This is a DIV element.
</div>

<script>
function myToggleFunction() {
   var element = document.getElementById("myDIV");
   element.classList.toggle("mystyle");
}
</script>

</body>
</html>
```




