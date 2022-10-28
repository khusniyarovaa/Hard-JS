
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



