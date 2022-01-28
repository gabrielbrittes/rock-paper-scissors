const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['rock','paper','scissors']

const handleClick = (e) => {
    const playerSelection = e.target.innerHTML
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]
    getResults(playerSelection, computerSelection)
}
choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
 switch (userChoice + computerChoice) {
     case 'scissorspaper': 
     case 'rockscissors':
     case 'paperrock': 
        resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' You win'
        break;
    case 'paperscissors': 
    case 'scissorsrock':
    case 'rockpaper': 
        resultDisplay.innerHTML = ' You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' You lose'
        break;
    case 'paperscissors': 
    case 'rock':
    case 'rockpaper': 
        resultDisplay.innerHTML = ' You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' Its a draw'
        break;

 }
}