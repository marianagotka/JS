// /* eslint-disable */

// /* Результатом сравнения является булевое значение */

// /* Сравнение чисел */
// const a = 17;
// const b = 5;
// a > b;
// console.log('a > b:', a > b);
// a <= b;
// console.log('a <= b:', a < b);

// a == b;
// console.log('a == b:', a == b);
// a != b;
// console.log('a != b:', a != b);

// /* Сравнение строк */
// 'a' < 'b';
// console.log("'a' < 'b':", 'a' < 'b');
// 'ab' > 'a';
// console.log("'ab' > 'a':", 'ab' > 'a');
// /* При сравнении переменных разных типов они преобразуются в числа */
// '17' > 1;
// console.log("'17' > 1:", '17' > 1);
// /* Строгое сравнение */
// 17 === 1;
// console.log('17 === 1:', 17 === 1);
// 17 === 17;
// console.log('17 === 17:', 17 === 17);
// 17 === '17';
// console.log("17 === '17':", 17 === '17');
// 17 === true;
// console.log('17 === true:', 17 === true);
// '0' === '';
// console.log("'0' === '':", '0' === '');
// true === false;
// console.log('true === false:', true === false);
// true === true;
// console.log('true === true:', true === true);
// null === undefined;
// console.log('null === undefined:', null === undefined);
// false === 0;
// console.log('false === 0:', false === 0);

// /* Нестрогое сравнение */
// 17 == '17';
// console.log("17 == '17':", 17 == '17');
// '0' == '';
// console.log("'0' == '':", '0' == '');
// 0 == '';
// console.log("0 == '':", 0 == '');
// null == undefined;
// console.log('null == undefined:', null == undefined);
// false == 0;
// console.log('false == 0:', false == 0);

// /* Осторожно c null и undefined */
// undefined == null;
// console.log('undefined == null:', undefined == null);
// undefined == 0;
// console.log('undefined == 0:', undefined == 0);
// null == 0;
// console.log('null == 0:', null == 0);
// undefined < 0;
// console.log('undefined < 0:', undefined < 0);
// undefined > 0;
// console.log('undefined > 0:', undefined > 0);

// const age = 'Ready';
// console.log(age);
// const amount = result;
// result = empty;

// const age = 'Ready';

// if (age === 'Ready') {
//   console.log('Ready');
// }

// const result = (amount = 'empty' ? result : 'empty');
/* Этот код менять не нужно */
const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

/* Раскоментируй код ниже, используя правильные операторы после знака присваивания */

const activeUser = (anotherUser = defaultUserName);
// const hasAccess = isAdmin /**/ isLoggedIn;
// const isTruthy = message /**/ anotherMessage;
// const isFalsy = /**/isLoggedIn;
// const isNotTrue = typeof message /**/ 'number';
// const isTrue = typeof message /**/ 'boolean';
