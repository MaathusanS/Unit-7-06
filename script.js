let guess = 0 // Defines guess as a variable.

document.getElementById('start').addEventListener('click', guesser) // Starts addEventListener for Lets Go! button that triggers guesser function.

document.getElementById('restart').style.display = 'none'
document.getElementById('restart').addEventListener('click', reload)

function guesser2 () {
  guess = prompt('Incorrect, try again!', '1-100')
  guess = parseInt(guess)
}

function guesser () {
  guess = prompt('Enter your guess here', '1-100')
  guess = parseInt(guess)

  while (guess > 16 || guess < 16) {
    guesser2()
  }
  document.getElementById('result').innerHTML = 'Congrats, you guessed correctly!'
  document.getElementById('restart').style.display = 'inline'
}

function reload () {
  location.reload()
}
