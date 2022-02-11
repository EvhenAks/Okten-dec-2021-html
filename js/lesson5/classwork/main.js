// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let min = (a, b, c) => {
//     let min = (a < b && a < c) ? a:
//         (b < a && b < c) ? b :
//             c;
//     console.log(min)
// }
//
// min(5, 3, 10)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let max = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else console.log(c)
// }
//
// max(5, 20, 10)

// - створити функцію яка повертає найбільше число з масиву

// let arr = [5, 10, 30, 8, 15];
//
// let max = (arr) => {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }
//
// console.log(max(arr))

// - створити функцію яка повертає найменьше число з масиву

// let arr = [100, 5, 10, 30, 8, 15];
//
//  let min = (arr) => {
//     let min = arr[0];
//      for (let arrKey of arr) {
//          if (arrKey < min){
//              min = arrKey
//          }
//      }
//      return min
//  }
//
// console.log(min(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrNumber = [10, 20, 15, 5];
//
// let arrSum = (arr) => {
//     sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = arr[i] + sum
//     }
//     return sum
// }
//
// console.log(arrSum(arrNumber))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arrNumber = [10, 20, 10, 5, 5];
//
// let arrMedium = (arr) => {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum = arrElement + sum
//     }
//     return sum / arr.length
// }
//
// console.log(arrMedium(arrNumber))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] < min) {
//             min = arg[i]
//         }
//         if (arg[i] > max) {
//             max = arg[i]
//         }
//     }
//     console.log(max)
//     return min
// }
//
// minMax(2,3,1,5,4)

// - створити функцію яка заповнює масив рандомними числами
//
// let arr = [];
//
// let arrPush = (value) => {
//     for (let i = 0; i < value; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
// }
//
// arrPush(10)
// console.log(arr)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
//
// let arrPush = (limit) => {
//     for (let i = 0; i < 10; i++){
//         arr.push(Math.round(Math.random()*limit))
//     }
// }
//
// arrPush(5);
// console.log(arr)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2, 3]
//
// let reverse = (arr) => {
//     let reversArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversArr.push(arr[i])
//     }
//     return reversArr
// }
// console.log(reverse(arr))


