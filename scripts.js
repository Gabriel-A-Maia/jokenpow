// const result = document.querySelector('.result')

// const playHuman = (humamChoice) => {
  
//     playTheGame(humamChoice, playMachine())
// }

// const playMachine = () =>{
//     const choices = ['rock', 'paper', 'scissors']
//     const randomNumber = Math.floor (Math.random() * 3)

   

//     return choices[randomNumber]
// }

// const playTheGame = (human, machine) => {

//     console.log('Humano: ' + human + 'Maquina: ' + machine)

//     if(human === machine){
//         result.innerHTML="deu empate"
//     }else if(
//     (human === 'paper' && machine === 'rock') ||
//     (human === 'rock' && machine === 'scissors') ||
//     (human === 'scissors' && machine === 'paper')
// ){
//       result.innerHTML="Voce ganhou "
//     }else{
//         result.innerHTML="Voce perdeu para a alexa "
//     }
// }



const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const humanChoiceText = document.querySelector('#human-choice')
const machineChoiceText = document.querySelector('#machine-choice')

let myScore = 0
let roboScore = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER:'paper',
    SCISSORS: 'scissors' 
   

}

const playHuman = (humamChoice) => {
  
    playTheGame(humamChoice, playMachine())
}

const playMachine = () =>{
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor (Math.random() * 3)

   

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    humanChoiceText.innerHTML = traduzChoice(human)
    machineChoiceText.innerHTML = traduzChoice(machine)

    console.log('Humano: ' + human + 'Maquina: ' + machine)
    
    console.log('Humano: ' + human + 'Maquina: ' + machine)

    if(human === machine){
        result.innerHTML="deu empate"
    }else if(
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
){
      result.innerHTML="Voce ganhou "

      myScore++
      humanScore.innerHTML = myScore
    }else{
        result.innerHTML="Voce perdeu para a alexa "

         roboScore++
         machineScore.innerHTML = roboScore

    }
}

const traduzChoice = (choice) => {
    if (choice === 'rock') return 'Pedra 🪨'
    if (choice === 'paper') return 'Papel 📄'
    if (choice === 'scissors') return 'Tesoura ✂️'
}