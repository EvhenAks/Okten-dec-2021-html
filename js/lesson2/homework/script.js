//1. - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = Math.floor(Math.random()*60);
// console.log(time)
//
// if (time <= 15){
//     console.log(1);
// } else if (time > 15 && time <= 30){
//     console.log(2)
// } else if (time > 30 && time <=45){
//     console.log(3)
// } else if (time > 45 && time < 60){
//     console.log(4)
// }

//2 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = Math.floor(Math.random()*32);
//
// let decade = (day >= 1 && day <=10) ? 1 :
//     (day >10 && day <= 20) ? 2 :
//         3;
// console.log(day)
// console.log(decade)

//3. - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = true;
//
// if (test !== true){
//     console.log('Вірно')
// } else {
//     console.log('Неправильно')
// }
//
// let test = !!true ? 'Вірно' : 'Неправильно';
// console.log(test);

//4. - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt();
//
// if (a !== 0){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }

//5. - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let a = +prompt('Від 1 до 7');
//
// switch (a) {
//     case 1:
//         console.log('lection');
//         break;
//     case 2:
//         console.log('classwork');
//         break;
//     case 3:
//         console.log('lection and homework');
//         break;
//     case 4:
//         console.log('additional classwork');
//         break;
//     case 5:
//         console.log('hard lection');
//         break;
//     case 6:
//         console.log('english lesson');
//         break;
//     case 7:
//         console.log('deadline');
//         break;
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let leapYear = +prompt('скільки днів в поточному році?') % 3;
//
// if (leapYear === 0){
//     console.log('yes')
// } else {
//     console.log('no')
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let fullName = prompt('яка "офіційна" назва JavaScript?');
//
// if (fullName === 'ECMAScript'){
//     console.log('Правильно!')
// } else {
//     console.log('Не знаєте? ECMAScript!')
// }

