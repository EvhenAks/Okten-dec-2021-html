// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function triangleS(a, b) {
//     return a * b;
// }

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function sRound(r) {
//     let s = r ** 2 * 3.14;
//     return s;
// }

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function sСylinder(h, r) {
//     let s = r ** 2 * 3.14 * h;
//     return s;
// }

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// function arrList(arrElem) {
//     for (let i = 0; i < arrElem.length; i++) {
//         console.log(arrElem[i])
//     }
// }
//
// arrList([1, 2, 3, 4, 5])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (text) {
//     document.write(`<p>${text}</p>`)
// }
// paragraph('some text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text) {
//     document.write('<ul>')
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write('</ul>')
// }
//
// list('one')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function numberList(text, value) {
//     document.write('<ul>');
//     for (let i = 0; i < value; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
//
// numberList('test', 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function arrELem (elem) {
//     document.write('<ol>')
//     for (let i = 0; i < elem.length; i++){
//         document.write(`<li>${elem[i]}</li>`)
//     }
//     document.write('</ol>')
// }
// arrELem([1,2,3, true, false, 'string', 'one'])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         id: 1,
//         name: 'Evhen',
//         age: 100
//     },
//     {
//         id: 2,
//         name: 'Kostia',
//         age: 30
//     }
// ]
//
// function objList(obj) {
//     for (let i = 0; i < obj.length; i++) {
//         document.write(`<div>${obj[i].id}, ${obj[i].name}, ${obj[i].age}</div>`)
//     }
// }
//
// objList(arr)