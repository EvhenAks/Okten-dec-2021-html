// - створити функцію яка обчислює та повертає площу прямокутника

// let triangleS = (a, b) => {
//     return a * b
// }
//
// console.log(triangleS(3,3));


// - створити функцію яка обчислює та повертає площу кола

// let roundS = (r) => {
//     return 3.14 * r ** 2
// }
//
// console.log(roundS(5));

// - створити функцію яка обчислює та повертає площу циліндру

// let cylinderS = (r,h) => 2 * 3.14 * r * (r + h);
//
// console.log(cylinderS(3,5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1, 2, 3, 4, 5, 6, 7];
//
// let arrIndex = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// };
//
// arrIndex(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let textP = (text) => {
//     for (let i = 0; i < 5; i++){
//         document.write(`<p>${text}</p>`)
//     }
// }
// textP('some text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let textList = (text) => {
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
//
// textList('some text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let textList = (text, value) => {
//     document.write('<ul>')
//     for (let i = 0; i < value; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
//
// textList('some text', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [10, 20, 'some', 'text', true, 30, false]
//
// let arrList = (arr) => {
//     document.write('<ol>')
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write('</ol>')
// }
//
// arrList(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         id: 1,
//         name: 'Vasya',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'Oleg',
//         age: 23
//     },
//     {
//         id: 3,
//         name: 'olya',
//         age: 18
//     }
// ]
//
// let arrList = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<div>${arr[i].id} - ${arr[i].name} - ${arr[i].age}</div>`)
//     }
// }
//
// arrList(arr);