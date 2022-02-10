// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numberMin(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else console.log(c)
// }
//
// numberMin(3, 5, 7);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numberMax(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else console.log(c)
// }
//
// numberMax(4, 2, 5);

// - створити функцію яка повертає найбільше число з масиву

// let arrNumber = [1, 4, 7, 4, 400, 300, 863, 2, 3, 6, 8, 5];
//
// function maxNumber(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// maxNumber(arrNumber);

// - створити функцію яка повертає найменьше число з масиву

// let arrNumber = [7, 4, 400, 0, 300, 863, 2, 3, 6, 8, 5];
//
// function minNumber(arr) {
//     let min = arr[0];
//     for (let minElement of arr) {
//         if (minElement < min){
//             min = minElement
//         }
//     }
//     return min
// }
//
// minNumber(arrNumber)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let numberArr = [10, 30, 40, 20];
//
// function arrSum(arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++){
//         num = arr[i] + num
//     }
//     return num
//         }
//
// console.log(arrSum(numberArr));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let numberArr = [10, 30, 40, 20];
//
// function mediumArr(arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++){
//         num = arr[i] + num
//
//     }
//     return num / arr.length
// }
//
// console.log(mediumArr(numberArr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

//
// function minMax(arg) {
//     let max = arguments[0];
//     let min = arguments[0];
//
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i]
//         }
//         if (arguments[i] < min) {
//             min = arguments[i]
//         }
//     }
//     console.log(min, max);
//     return max;
// }
//
// minMax(100, 10, 300, 500, 50, 250)


// - створити функцію яка заповнює масив рандомними числами
//
// let randomArr = [];
//
// function pushRandom(length, arr) {
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * 20))
//     }
// }
//
// pushRandom(10, randomArr);
// console.log(randomArr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let randomArr = [];
//
// function pushLimitRandom(length, limit, arr) {
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * limit))
//     }
// }
//
// pushLimitRandom(10, 5, randomArr)
// console.log(randomArr)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3];
//
// let arr = [1,2,3];
// function reverse(arr){
//     let reverseArr = []
//     for (let i = arr.length - 1; i >= 0; i--){
//         reverseArr.push(arr[i])
//     }
//     return reverseArr
// }
//
// console.log(reverse(arr))