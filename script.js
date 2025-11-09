// console.log("Moeez");

// // //
// const accountId = 144556;
// let accountEmail = "moeez@gmail.com";
// var accountWebsite = "moeezwebistedeveloper.com";
// accountCity = "Karachi";

// // accountId = 86643; // Not Allowed
// accountEmail = "moeezahmed1012@gmail.com";
// accountWebsite = "another";
// accountCity = "islamabad";

// console.table([accountId, accountEmail, accountWebsite, accountCity]);

// // //
"use strict";
// const { jsx } = require("react/jsx-runtime");

//treat all JS code as newer version

// alert("Hello"); // we are using node.js, not browser

// Original javaScript documentation webiste https://www.tc39.es

// let myName = "Moeez"; // string data type
// let age = 19; // number data type
// let isLoggedIn = true; //boolean data type
// let empty = null; // null data type
// let undefine = undefined; // undefined data type
// let symbol = Symbol("Hello"); // Symbol data type
// let bigInt = BigInt("4614565575775566562896"); // BigInt data type

// const allEl = [myName, age, isLoggedIn, empty, undefine, symbol, bigInt];
// console.table(allEl);

// // //

// let score = "33";
// let valueInNum = Number(score);

// console.log(typeof score);
// console.log(typeof valueInNum);

// let isLoggedIn = 9;
// let newNum = Boolean(isLoggedIn);
// console.log(newNum;

// let stringNum = String(10);
// console.log(typeof stringNum);

// // //
// let str1 = "Hello";
// let str2 = " Moeez";
// let str3 = str1 + str2;

// console.log(str3);

// let str4 = "2" + 1;
// let str5 = 2 + "1";

// console.log(str4);
// console.log(str5);

// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);

// console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(true+);

// console.log(+ "");

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// console.log(fruits.at(0)); // "Apple"
// console.log(fruits.at(2)); // "Mango"
// console.log(fruits.at(-1)); // "Orange" (last element)
// console.log(fruits.at(-2)); // "Mango"

// // //

// console.log("2" > 1);
// console.log("2" < 1);

// console.log(null >= 0);

// let a  = 0;
// let b = "moeez";
// let c = a > b

// console.log(c);

// let a  = 1;
// let b = false;
// let c = a > b

// console.log(c);

// let a  = null;
// let b = 1;
// let c = a >= b

// console.log(c);

// let a  = 1;
// let b = true;
// let c = a == b

// console.log(c);

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id, anotherId);
// console.log(id === anotherId);

// let value = null;
// console.log(value);

// value = 10;
// console.log(value);

// Stacks (Primitive), Heap (Non-Primitive) Memory

// let varOne = 10;
// let varTwo = varOne;

// console.log(varOne);
// console.log(varTwo);

// varTwo = 15;

// console.log(varOne);
// console.log(varTwo);

// let objOne = {
// 	userName: "moeez1012",
// 	email: "moeezahmed1012@gmail.com"
// }

// let objTwo = objOne;

// console.log(objOne);
// console.log(objTwo);

// objTwo.userName = "ali_raza";

// console.log(objOne);
// console.log(objTwo);

// let oneArr = ["moeez_ahmed", "moeez@gmail.com", 19];
// console.log(oneArr);

// let secondArr = oneArr
// console.log(secondArr);

// secondArr[0] = "ali_raza";

// console.log(secondArr);

// let objOne = {
// 	userName: "moeez1012",
// 	email: "moeezahmed1012@gmail.com"
// }

// let objTwo = objOne;

// console.log(objOne);
// console.log(objTwo);

// objTwo = {
// 	website:"example.com"
// }

// console.log(objOne);
// console.log(objTwo);

// assembly language

// // //

// const name = "Moeez";
// const repoCount = 5;
// const result = `Hello my name is ${name} and my repoCount is ${repoCount}`

// console.log(result);

// const gameName = new String(`Vegas Crime`);
// console.log(gameName);

// console.log(gameName.__proto__);
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("s"));
// console.log(gameName.toLocaleUpperCase());

// const gameNum = new Number(1012);
// console.log(gameNum);

// const URL = `https://www.tarakkihub.com/moeez%20ahmed/`;
// console.log(URL.replace("%20", "-"));

// const strOne = `Moeez ahmed Developer`;
// console.log(strOne.split(" ",));
// console.log(strOne.includes("ahmed"));
// console.log(strOne.startsWith("Moeez"));

// // // Numbers and Mathes

// const name = `Moeez Ahmed`;
// const age  = 19;
// console.log(`Hello My Name is ${name} and my age is ${age}`);

// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

// const otherNumOne = 230.8966;
// console.log(otherNumOne);

// console.log(otherNumOne.toPrecision(5));
// console.log(otherNumOne);

// const oneThousand = 1000;
// console.log(oneThousand.toLocaleString("en-IN"));

// const number = 10;
// console.log(number.toExponential());
// console.log(number.valueOf(1));

// const safeInteger = Number.MAX_SAFE_INTEGER
// console.log(safeInteger)

// console.log(Math);

// const mathAbs = -99;
// console.log(mathAbs);

// const mathAbsPos = Math.abs(mathAbs);
// console.log(mathAbsPos);

// const mathRound = 99.9;
// console.log(mathRound);

// const mathAround = Math.round(mathRound);
// console.log(mathAround);

// const mathCeil = 99.9;
// console.log(mathCeil);

// const finalResult = Math.ceil(mathCeil);
// console.log(finalResult);

// const mathFloor = 99.9;
// console.log(mathFloor);

// const finalResult = Math.floor(mathFloor);
// console.log(finalResult);

// const mathSqrt = 25;
// console.log(mathSqrt);

// const finalResult = Math.sqrt(mathSqrt);
// console.log(finalResult);

// const mathMin = 25, 30, 10, 20;
// console.log(mathMin);

// const finalResult = Math.min(25, 30, 10, 20, 0);
// console.log(finalResult);

// const finalResult = Math.max(25, 30, 10, 20, 0);
// console.log(finalResult);

// const mathPower = 5;
// console.log(mathPower);

// const finalResult = Math.pow();
// console.log(finalResult);

// const mathRandom = Math.floor((Math.random() * 3) + 1);
// console.log(mathRandom);

// // //
// const date = new Date();
// console.log(date);

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());

// const createdDate = new Date(2020, 1, 10);
// console.log(createdDate.toDateString());

// const dateShow = document.querySelector("#dateShow");

// const dateNow = new Date();
// const date = dateNow.toDateString();

// dateShow.innerText = date;
// console.log(date);

// let count = 0;

// setInterval(() => {
//   count++;
//   console.log("Count:", count);
// }, 1000);

// const dateShow = document.querySelector("#dateShow");

// const showDate = () => {
//   let date = new Date();
//   let yearNow = date.getFullYear();
//   let monthNow = date.getMonth();
//   let dateNow = date.getDate();
//   let timeNow = date.toLocaleTimeString();

//   dateShow.innerText = `${yearNow} - ${monthNow} - ${dateNow} : ${timeNow}`;
// };

// setInterval(showDate, 1000);

// const date = new Date();
// const result = date.toLocaleString("default", {
//   weekday: "long",
//   timeStyle: "full",
// });

// console.log(result);

// ********************* // // // ************************** *

// const myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString()); // toString
// console.log(myDate.toISOString()); // toISOString
// console.log(myDate.toJSON()); // toJSON
// console.log(myDate.toDateString()); // toDateString
// console.log(myDate.toLocaleString()); // toLocaleString

// console.log(typeof myDate);

// const myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// const createdDateTime = new Date(2023, 0, 23, 5, 30, 10);
// console.log(createdDateTime.toLocaleString());

// const myCreatedDate = new Date("2025-11-09 12:40"); // Date in YY-MM-DD
// console.log(myCreatedDate.toLocaleString());

// const myCreatedDate = new Date("11-09-2025"); // Date in MM-DD-YY
// console.log(myCreatedDate.toDateString());

// const myCreatedDate = new Date("Nov-09-2025"); // Date in MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

// console.log(
//   `now the date is ${new Date().toDateString()} and the time is ${new Date().toLocaleTimeString()}`
// );

// const date = new Date();
// const result = date.toLocaleString("default", {
//   day: "2-digit",
//   weekday: "long",
//   month: "long",
// });

// console.log(result);

// // //

// const arr = new Array().__proto__;
// console.log(arr);

// const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);

// const newArr = myArr.join("");
// console.log(newArr);

// const citiesPK = ["karachi", "lahore", "islamabad", "peshawar", "multan"];
// console.log(citiesPK);

// const provincePk = new Array("Sindh", "Punjab", "Balochistan", "KPK");
// console.log("A", provincePk);

// const newArr = provincePk.splice(1, 1, "Karachi");
// console.log(newArr);

// console.log("B", provincePk);

// const provincePk = new Array("Sindh", "Punjab", "Balochistan", "KPK");
// console.log("A", provincePk);

// const newArr = provincePk.slice(1, 2);
// console.log(newArr);

// console.log("B", provincePk);

// const arrLang = ["html", "css", "javascript", "node.js", "python"];
// console.log(arrLang.includes("PHP"));
// console.log(arrLang.indexOf("css"));

// const newArr = arrLang.fill(0, 3);
// console.log(newArr);

// const frontendLang = ["Html", "css", "js"];
// const backEndLang = ["node.js", "PHP", "Python"];
// const dataBase = ["MongoDb", "mysql"];

// const newArr = frontendLang.concat(backEndLang, dataBase);
// console.log(newArr);

// const fullStack = [...frontendLang, ...backEndLang, ...dataBase];
// console.log(fullStack);

// const number = [0, 1, 2, 3, [4, 5], 6, 7, [8, 9, [, 10, 11]]];
// console.log(number);

// const result = number.flat(Infinity);
// console.log(result);

// console.log(Array.isArray(number));
// console.log(Array.from("Moeez"));

// const score1 = 100;
// const score2 = 200;
// const score3 = 300;
// const boolean = true;
// const Null = null;
// const name = "Moeez";

// const result = Array.of(score1, score2, score3, boolean, Null, name);
// console.log(result);

// // //

// const mySym = Symbol("key01");

// const jsUser = {
//   name: "Moeez",
//   mySymbol: mySym,
//   [mySym]: "myKey1",
//   lastLoginDays: ["monday", "wednesday", "saturday"],
// };

// console.log(jsUser["name"]);
// console.log(typeof jsUser["mySymbol"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);

// jsUser.greeting = function () {
//   console.log("Hi! from JS User");
// };

// jsUser.greetingTwo = function () {
//   console.log(`Hi! from JS User, ${this.name}`);
// };

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// console.log(jsUser);

// const stuDetails = {
//   name: "Aliza Naz",
//   age: 24,
//   arr: [0, 1, 2, 3, 4, 5],
//   details: {
//     detailId: 16513,
//   },
//   func: function () {
//     console.log(`Hi there I am ${this.name}`);
//   },
// };

// stuDetails.greet = function () {
//   console.log(`Hello there! My age is ${this.age}`);
// };

// console.log(stuDetails);
// console.log(stuDetails.func());
// console.log(stuDetails.greet());
// console.log((stuDetails.arr[1] = 101));

// const myDetails = {
//   name: "Moeez",
//   func() {
//     console.log("It's a function");
//   },
// };

// myDetails.greet = () => {
//   console.log("Hi");
// };

// console.log(myDetails.greet());
// console.log(myDetails);

// let a = 10;
// setInterval(() => {
//   console.log("Hi there", a);
//   a++;
// }, 1000);

// const tinderUser = new Object();

// tinderUser.id = "123abc";
// tinderUser.name = "Moeez";
// tinderUser.isLoggedIn = true;

// console.log(tinderUser);

// const regularUser = {
//   email: "some@gmail.com",
//   fullName: {
//     userFullName: {
//       firstName: "Muhammad",
//       surname: "Moeez",
//       lastName: "Ahmed",
//     },
//   },
// };

// console.log(regularUser.fullName.userFullName.firstName);

// const obj1 = {
//   1: "a",
//   2: "b",
//   3: "c",
//   4: "d",
// };

// console.log(obj1);

// const obj2 = {
//   5: "e",
//   6: "f",
//   7: "g",
//   8: "h",
// };

// console.log(obj2);

// // const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(obj1);
// console.log(obj2);

// console.log(obj1 === obj3);

// const userData = {
//   id: 110,
//   name: "moeez",
//   email: "moeez@gmail.com",
// };

// console.log(userData.hasOwnProperty("hsjh")); //for check that have this propert in the object.

// const usersKeys = Object.keys(userData);
// console.log(usersKeys);

// const usersValues = Object.values(userData);
// console.log(usersValues);

// const userEntries = Object.entries(userData);
// console.log(userEntries);

// const cities = {
//   1: "Karachi",
//   2: "Lahore",
//   3: "islamabad",
// };

// console.log(Object.keys(cities));
// console.log(Object.values(cities));

// const course = {
//   courseName: "JavaScript in Urdu",
//   coursePrice: 0,
//   courseInstructor: "Hitesh Choudhary",
// };

// const { courseInstructor: instructor, courseName } = course;
// console.log(instructor);
// console.log(courseName);

// // //

// function sayMyName() {
//   console.log("M");
//   console.log("O");
//   console.log("E");
//   console.log("E");
//   console.log("Z");
// }

// sayMyName();

// function addTwoNum(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     console.log(num1 + num2);
//   } else {
//     if (num1 == true || num2 == true) {
//       console.log(`Sorry Enter a number without ${num1} or ${num2}`);
//     }
//   }
// }

// addTwoNum(10, undefined);

// function addNum(a, b) {
//   let resultOne = a + b;
//   return resultOne;
//   // return a + b;
// }

// const result = addNum(10, 10);
// console.log(result);

// function loginUserMsg(username) {
//   if (!username) {
//     console.log("Please Enter Your Username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// const result = loginUserMsg("moeez_ahmed");
// console.log(result);

// function sumOfTwoNum(num) {
//   return num * num;
// }

// const result = sumOfTwoNum(10);
// console.log(result);

// function calcCartPrice(...cart) {
//   return cart;
// }

// const result = calcCartPrice(100, 200, 400, 500, 1000, 2000);
// console.log(result);

// function calcCartPrice(cart1, cart2, ...cart) {
//   return cart1, cart2, cart;
// }

// const result = calcCartPrice(100, 200, 400, 500, 1000, 2000);
// console.log(result);

// const userObj = {
//   userName: "Moeez",
//   price: 99,
// };

// const secondObj = {
//   product: "Pen",
//   price: 14.99,
// };

// function handleObj(anyObj, secondObj) {
//   console.log(
//     `Username is ${anyObj.userName} and it's price is ${secondObj.price}`
//   );
// }

// handleObj(userObj, secondObj);

// const arr = [200, 300, 100, 500, 400, 1000, 1500, 1499];

// function arrfunc(anyArray) {
//   return `it's and second at array ${anyArray[2]}`;
// }

// const result = arrfunc(arr);
// console.log(result);

// function func1(para1) {
//   console.log("It's function 01");
// }

// function func2(para2) {
//   console.log("It's function 02", para2);
// }

// func2(func1());

// function one() {
//   const userName = "Moeez";

//   function two() {
//     let webiste = "youtube.com";
//     console.log(`my name is ${userName} and my webiste name is ${webiste}`);
//   }

//   // console.log(website);

//   two();
// }

// one();

// const oneNum = one(5);

// function one(num) {
//   return num + 1;
// }

// console.log(oneNum);

// const two = function (num) {
//   return num + 2;
// };

// const twoNum = two(5);
// console.log(twoNum);

console.log("hi");
