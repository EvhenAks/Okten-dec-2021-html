// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3){
//     console.log('Це великий масив, в якому 3 і більше елементів')
// } else {
//     console.log('Це маленький масив, в якому менше 3 елементів')
// };

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let number1 = +prompt();
// let number2 = +prompt();
// let number3 = +prompt();
//
// if (number1 > number2 && number1 < number3) {
//     console.log(number1)
// } else if (number1 < number2 && number1 > number3) {
//     console.log(number1)
// } else if (number2 > number1 && number2 < number3) {
//     console.log(number2)
// } else if (number2 < number1 && number2 > number3){
//     console.log(number2)
// } else {
//     console.log(number3)
// };

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
// let result = (a + b < 4) ? 'мало' : 'багато';
// console.log(result);

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let number = prompt();
// let test = (number < 0) ? 'negative' :
//     (number > 0) ? 'positive' :
//         '0';
// console.log(test);