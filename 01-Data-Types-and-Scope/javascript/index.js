//==================Event==================\\
// function changeTitle(e) {
// 	console.log(e);
// }

// var button = document.getElementById("change-title");

// console.log(button);
//==================Event==================\\

// console.log(a); // error because no reference

// var b; //undefined
// console.log(b)

// let arrays = [1, "1", false, {firstname: "John Bill"}, function(){console.log("hello")}]

// var firstname,lastname;
// function walk() {}

// let person = {
//   firstname: "John Bill",
//   walk:function () {}
// }

// person.firstname

// class Parent {
//   String hairColor;
//   int wingspan;

//   void walk(){}

//   void talk(){}
// }

// class Child extends Parent{

// }

// var number = 5; // global scope
// var sum = 10;

// function calculate(first, second) {
// 	// var sum = 0 //function scope
// 	let sum = 0;
// 	let blockScope = "scope of function block";
//   const pi = 3.14;
// 	console.log(sum);
// 	if (sum < 5) {
// 		let blockScope = "this is block scope";
// 		console.log("inside if", blockScope);
// 		// console.log(sum);
// 	}
// 	console.log("pi", pi);
// 	console.log(blockScope);
// 	return sum;
// }

// calculate(1, 2);

// function customTimeout(callback, time) {
// 	//do any logic
// 	// sleep(time)
// 	callback(time, "asdf");
// }

// customTimeout(function (time, name) {
// 	console.log("callback called:", time, name)
// },1000);

// setTimeout(function () {
// 	console.log("hello");
// }, 0);

// let interval = setInterval(() => {
// 	console.log("hello")
// }, 1*1000);

// setTimeout(() => {
// 	clearInterval(interval)
// }, 10*1000);

// console.log("hi!");

// setTimeout(() => {
// 	console.log("set timeout 1s!");
// }, 1000);

// setTimeout(() => {
// 	console.log("set timeout!");
// }, 0);

// // Promise.resolve().then(function () {
// // 	console.log("promise finished")
// // })

// console.log("there")

// for (var index = 0; index < 5; index++) {
// 	// let index //0
// 	setTimeout(() => {
// 		console.log(index); //5
// 	}, 0);
// 	// console.log("outside timeout", index)
// }

// document.getElementById("change-title")
// .addEventListener("click", function(){
// 	console.log("callback change title")
// })

// document.getElementById("remove")
// .addEventListener("click", function(){
// 	console.log("callback change remove")
// })

// const test = (params) => {
// 	console.log("sdf")
// }
// test()



// while(true){}

// array methods / arrow function
// Promise
// React

let person = {
	firstname: "John",
}

console.log(person.address?.street)
if(person?.address?.street){

}
