"use strict";

// Задание №1

// 1 Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// 2 Вывести в консоль произведение (умножение) цифр этого числа
let arr = ('' + num).split('')   // создание массива ('' + num) переводит число в стоковый, .split('') делит на элементы т.е. цифры 
const res = arr.reduce((acc, rec) => acc * rec);
console.log(res);

// 3 Полученный результат возвести в степень 3, используя только 
  // 1 оператор (Math.pow не подходит)
let cube = res **3;

// 4 Вывести в консоль первые 2 цифры полученного числа

let strn = Number(String(cube).substring (0, 2));
console.log(strn);




// // Все что ниже оставил для себя различные варианты выполнения задания

// // 1 Создать переменную num со значением 266219 (тип данных число)
// let num = 266219;
// console.log(num);
// console.log(typeof num);

// // 2 Вывести в консоль произведение (умножение) цифр этого числа
// // const array = [5, 123, 556, 78, 3];
//   // 1 метод
// let arr = ('' + num).split('')   // создание массива ('' + num) переводит число в стоковый, .split('') делит на элементы т.е. цифры 
// console.log(arr.map(Number))     // переводит строковый массив в числовой

// const res = arr.reduce((acc, rec) => acc * rec);
// console.log(res);
// console.log(typeof num);

//   // 2 метод
// let numb = 266219;
// let digits = numb.toString().split('');
// let realDigits = digits.map(Number)
// console.log(realDigits);
// const resul = arr.reduce((acc, rec) => acc * rec);
// console.log(res);
// console.log(typeof num);

// // 3 Полученный результат возвести в степень 3, используя только 
//   // 1 оператор (Math.pow не подходит)
// let cube = res **3;
// console.log(res **3)

// // 4 Вывести в консоль первые 2 цифры полученного числа
//   // 1- метод
// let st = cube.toString();
// let no = st.substring (0, 2);
// console.log(Number(no));

// // Вывести в консоль первые 2 цифры полученного числа
// // 2 метод 
// let str = String(cube).substring (0, 2);
// console.log(Number(str));

// // метод 3
// let strn = Number(String(cube).substring (0, 2));
// console.log(strn);


// Задание №2
// Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//  a) через if,
 let lang = 'ru';

 if (lang == 'ru') {
   console.log("Понедельник");
   console.log("Вторник");
   console.log("Среда");
   console.log("Четверг");
   console.log("Пятница");
   console.log("Суббота");
   console.log("Воскресенье");
 
 } else if (lang == 'en') {
   console.log("Monday");
   console.log("Tuesday");
   console.log("Wednesday");
   console.log("Thursday");
   console.log("Friday");
   console.log("Saturday");
   console.log("Sunday");
 }
 
//  b) через switch-case
switch (lang) {
  case 'ru':
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
    break

  case 'en':
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
    break  
}

//  c) через многомерный массив без ифов и switch. 
let array = [];
array['ru'] = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
array['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(array[lang]);


// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, 
// если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch 

let namePerson = 'Александр'
namePerson === 'Артем' ? console.log('директор') : namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент')



// Урок №3
// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если в качестве аргумента передана не строка - функция оповещает 
// об этом пользователя

// — В полученной (как аргумент) строке функция должна убрать все пробелы 
// в начале и в конце

// — Если строка более 30 знаков - то после 30го символа часть текста 
// скрывается и вместо них появляются три точки (...)


// let a = 2;
// let a = "Вопрос: Почуму если при вводе тип данных числовой в консоли выдает undefined?";
let a = "^^^Посмотри вопрос выше^^^";

 let str = function(a) {
  if ( typeof a !== 'string') {
    alert('аргумент не строка');

  } else if (a.length > 30) {
    a = a.trim()
    return a.substring(0, 30) + "..."

  } else if (a.length <= 30) {
    a = a.trim();
    return a;
  }
 }

console.log(str(a));

// урок№ 4
// 1) Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 
// 4 (Должны присутствовать в массиве) 

let arrayNumbers = ["54", "28", "856", "456", "256", "65", "54"]

for (let key of arrayNumbers) {

  let number = key[0]
  if (number == 2 || number == 4)
  console.log(key)
}

// 2) Вывести в столбик все простые числа от 1 до 100 
// (сделать при помощи цикла)
// — Рядом с каждым числом написать оба делителя данного числа
//     Например: “Делители этого числа: 1 и n” 

// ТО ДО ЧЕГО Я ДОШЕЛ СВОЕЙ ГОЛОВОЙ 
for (let i = 2; i <= 100; i++) {
  switch (i) {
    case 2:
    case 3:
    case 5:
    case 7:
      console.log(i, "Делители этого числа: 1 и " + i)
      break
  }
  if ((i % 7) > 0) {
    if ((i % 5) > 0) {
      if ((i % 3) > 0) {
        if ((i % 2) > 0) {
          console.log(i, "Делители этого числа: 1 и " + i)
        }
      }
    }
  }
}

// ЧУЖАЯ КОНСТРУКЦИЯ (НЕ СРАЗУ, НО РАЗОБРАЛСЯ ЧТО В НЕЙ И КАК)

// nextPrime:
// for (let i = 2; i <= n; i++) { 

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime; 
//   }

//   console.log(i, "Делители этого числа: 1 и " + i ); 
// }
