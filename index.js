let Options = [ 'piedra', 'papel', 'tijeras', 'lagarto', 'spock']


let randomOptions = Options[Math.floor(Math.random()* Options.lenght)]
let person = prompt("¿Cual opcion deseas? : piedra, papel, tijeras, lagarto o spock")

person = person.toLowerCase()

if (person == 'tijeras' && randomOptions == 'papel') {
        console.log('You win!')
} else if (person == 'papel' && randomOptions == 'piedra') {
        console.log('You win!')
} else if (person == 'piedra' && randomOptions== 'lagarto') {
        console.log('You win!')
} else if (person == 'lagarto' && randomOptions== 'spock') {
      console.log('You win')
} else if (person == 'spock' && randomOptions == 'tijeras') {
        console.log('You win!')
} else if (person == 'tijeras' && randomOptions == 'lagarto') {
        console.log('You win!')
} else if (person == 'lagarto' && randomOptions== 'papel') {
        console.log('You win!')
} else if (person == 'papel' && randomOptions== 'spock') {
      console.log('You win')
}  else if (person == 'spock' && randomOptions== 'piedra') {
      console.log('You win')
}  else if (person == 'piedra' && randomOptions== 'tijeras') {
      console.log('You win')

} else if (person== 'papel' && randomOptions == 'tijeras') {
        console.log('You loose!')
} else if (person== 'piedra' && randomOptions == 'papel') {
        console.log('You loose!')
} else if (person== 'lagarto' && randomOptions== 'piedra') {
        console.log('You loose!')
} else if (person == 'spock' && randomOptions== 'lagarto') {
      console.log('You loose')
} else if (person== 'tijeras' && randomOptions == 'spock') {
        console.log('You loose!')
} else if (person== 'lagarto' && randomOptions == 'tijeras') {
        console.log('You loose!')
} else if (person== 'papel' && randomOptions== 'lagarto') {
        console.log('You loose!')
} else if (person == 'spock' && randomOptions== 'papel') {
      console.log('You loose')
}  else if (person == 'piedra' && randomOptions== 'spock') {
      console.log('You loose')
}  else if (person == 'piedra' && randomOptions== 'tijeras') {
      console.log('You loose') 
}

