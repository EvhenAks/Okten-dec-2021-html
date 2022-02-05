let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

// 2. перебрати його циклом for
//
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 1;
// while (i < numbers.length) {
//     console.log(numbers[i])
//     i+=2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 1; i < numbers.length; i += 2) {
//     console.log(numbers[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < numbers.length){
//     if (numbers[i] % 2 === 0){
//         console.log(numbers[i])
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 2; i < numbers.length; i+=3){
//     numbers[i] = 'okten'
// }
// console.log(numbers)

// 8. вивести масив в зворотньому порядку.

// let reverse = numbers.reverse();
// console.log(reverse)


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 9.1 перебрати його циклом while

// let i = numbers.length - 1
// while (i >= 0){
//     console.log(numbers[i]);
//     i--
// }

// 9.2 перебрати його циклом for

// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i])
// };

// 9.3 перебрати циклом while та вивести  числа тільки з непарним індексом
//
// let i = numbers.length - 1;
// while (i > 0) {
//     console.log(numbers[i])
//     i -= 2
// }

// 9.4 перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = numbers.length - 1; i > 0; i -= 2){
//     console.log(numbers[i])
// }

// 9.5 перебрати циклом while та вивести  числа тільки парні  значення

// let i = numbers.length - 1;
// while (i >= 0) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i--
// }

// 9.6 перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = numbers.length - 1; i >= 0; i--){
//     if (numbers[i] % 2 === 0){
//         console.log(numbers[i])
//     }
// };

// 9.7 замінити кожне число кратне 3 на слово "okten"

// for (let i = numbers.length - 3; i >=0; i-=3){
//     numbers[i] = 'okten'
// }
// console.log(numbers);

