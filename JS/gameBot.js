// Игра усложненный вариант


let isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

let rand = function(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function game() {
  let randomNumber = rand()
  let numberTry = 3
  console.log(randomNumber)

  function condition() {
    
    if (numberTry === 0) {
      let gameReplay = confirm("Попытки закончились, хотите сыграть еще?")
      if (gameReplay === true) {
        game()
      } else {
        alert("Игра окончена")
      }
    } else {
      responseNumber = prompt("Угадай число от 1 до 100. У Вас попыток " + numberTry)
      numberTry--
    }

    if (responseNumber === null) {
      alert("Игра окончена")
    } else if (randomNumber < responseNumber) {
      alert("Загаданное число меньше, осталось попыток " + (numberTry))

      console.log(numberTry)
      condition()
    } else if (randomNumber > responseNumber) {
      alert("Загаданное число больше, осталось попыток " + (numberTry))
      
      console.log(numberTry)
      condition()
    } else if (randomNumber == responseNumber) {
      let gameVictory = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")
      if (gameVictory === true) {
        game()
      } else {
        alert("Игра окончена")
      }
    } else if (!isNumber(responseNumber)){
      alert('Введите число'); 
      condition()
    }
  }
  condition()
}
game()