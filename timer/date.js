let date = new Date()

// Задание 1а
let options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};

document.getElementById("today").innerHTML = ("Сегодня " + date.toLocaleString('ru', options))

// Задание 1б + Задание 3
setInterval(function() {
let date = new Date()
let addZero = function(sum) {
  if (sum < 10) {
    return '0' + sum
  } else {
    return sum
  }
}

let content = addZero(date.getDate()) + "." + addZero(date.getMonth() + 1) + "." + date.getFullYear() + " - " + addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
document.getElementById('day-format').innerHTML = content
}, 1000);


// Задание 2 Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"
setInterval(function() {
let visibleContent;
let wordDeclension = {
  month: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
  week: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
  hour: ["час", "часа", "часов"],
  minutes: ['минута', 'минуты', 'минут'],
  seconds: ['секунда', 'секунды', 'секунд'],
};

let date = new Date();
let day = date.getDate();
let year = date.getFullYear();
let daysWeek = wordDeclension.week[date.getDay()];
let month = wordDeclension.month[date.getMonth()];
let hour = date.getHours() + " " + declOfNum(date.getHours(), wordDeclension.hour);
let minutes = date.getMinutes() + " " + declOfNum(date.getMinutes(), wordDeclension.minutes);
let seconds = date.getSeconds() + " " + declOfNum(date.getSeconds(), wordDeclension.seconds);

function declOfNum(n, textForms) {  
  n = Math.abs(n) % 100; 
  var n1 = Math.abs(n) % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 == 1) { return textForms[0]; }
  return textForms[2];
};

visibleContent = "Сегодня " + daysWeek + " " + day + " " + month + " " + year + " года " + hour + " " + minutes + " " + seconds
document.getElementById('day').innerHTML = visibleContent; 
}, 1000);





