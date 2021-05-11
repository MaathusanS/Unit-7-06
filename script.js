let guess = 0 // Defines guess as a variable.

document.getElementById('start').addEventListener('click', guesser) // Starts addEventListener for Lets Go! button that triggers guesser function.

document.getElementById('restart').style.display = 'none' // Hides play again button.
document.getElementById('restart').addEventListener('click', reload) //  Starts addEventListener for button that triggers reload function.

function guesser2 () {
  guess = prompt('Incorrect, try again!', '1-100') // Makes prompt.
  guess = parseInt(guess) // Converts input into integer.
}

function guesser () {
  guess = prompt('Enter your guess here', '1-100') // Makes prompt.
  guess = parseInt(guess) // Turns input into integer.

  while (guess > 16 || guess < 16) { // Makes while statement that keeps running until the user guesses the age 16.
    guesser2() // Calls on the guesser2 function.
  }
  document.getElementById('result').innerHTML = 'Congrats, you guessed correctly!' // Displays text.
  document.getElementById('restart').style.display = 'inline' // Unhides play again button.
}

function reload () {
  location.reload() // Reloads page.
}
