// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [1, 2, 3, 4, 5, 'one', 'two', 'three', 'four', 'five', [6, 'six', true,], [7, 'seven', false], [8, 'eight', true], [9, 'nine', false], [10, 'ten', true]]
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 'Hello'
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (i = 0; i < 10; i++) {
//     document.write('<div>Довільний текст</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (i = 0; i < 10; i++){
//     document.write(`<div>Довільний текст ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<h1>довільний текст</h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Довільний текст ${i}</h1>`)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// let i = 0
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, true, false, 'one', 'two', 'three', 100, 200];
//  for (i = 0; i < arr.length; i++) {
//      console.log(arr[i])
//  }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [1, 2, 3, true, false, 'one', 'two', 'three', 100, 200];
// for (i = 0; i < 10; i++){
//     if (typeof arr[i] === 'boolean'){
//         console.log(arr[i])
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [1, 2, 3, true, false, 'one', 'two', 'three', 100, 200];
// let i = 0;
// while ( i < arr.length){
//     if (typeof arr[i] === 'number'){
//         console.log(arr[i])
//     }
//     i++
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [1, 2, 3, true, false, 'one', 'two', 'three', 100, 200]
// for (i = 0; i < arr.length; i++){
//     if (typeof arr[i] === 'string') continue;
//         console.log(arr[i]);
// };


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// for (i = 0; i < 3; i++) {
//     arr.push(Math.floor(Math.random() * 10))
// }
// console.log(arr)
//
// arr[3] = 'hello'
// arr[4] = true;
// arr[5] = false;
// arr[6] = false;
// arr[7] = 'world';
// arr[8] = 'friday';
// arr[9] = 10;
//
// for (i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 10; i++){
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i = i + 2) {
//     console.log(i);
//     document.write(i);
// };

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 2; i < 100; i = i + 2) {
//     console.log(i);
//     document.write(i);
// };


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (i = 1; i < 100; i+=2){
//     console.log(i);
//     document.write(i);
// }