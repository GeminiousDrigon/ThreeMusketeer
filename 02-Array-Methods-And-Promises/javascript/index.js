console.log("Starting Array Methods & Promises");
//==================Array Methods==================\\
// // 							 0         1        2         3          4
// let fruits = ["banana", "apple", "orange", "grape", "watermelon"];
// console.log(fruits);
// console.log("index 0:", fruits[0]);

// //splice — to remove something / remove and add something
// // —requirements—
// // 1. position - starting position of the element that you want to delete
// // 2. number of element - number of elements you want to delete
// // 3. elements - elements that you want to add back

// // delete banana
// let deletedElements = fruits.splice(0, 1);
// console.log(deletedElements);
// console.log(fruits);

//map
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// let doubledNumbers = numbers.map(function (number, i, a) {
// 	// console.log(number, i, a);
// 	return number * 2;
// });
// console.log(doubledNumbers);
// console.log(numbers);

// let family = [
// 	{
// 		firstname: "John",
// 		lastname: "Doe",
// 		isParent: true,
// 	},
// 	{
// 		firstname: "Jane",
// 		lastname: "Doe",
// 		isParent: true,
// 	},
// 	{
// 		firstname: "Jenny",
// 		lastname: "Doe",
// 		isParent: false,
// 	},
// ];
// console.log(family);
// let familyFullnames = family.map(function (value, index, array) {
// 	let extension = "(C)";
// 	if (value.isParent) extension = "(P)";
// 	return value.firstname + " " + value.lastname + " " + extension;
// });
// console.log(familyFullnames);
// console.log(family);

//reduce
// let numbers = [1, 2, 3, 4, 5, 6]; // 1,000 Element
// console.log(numbers);
// //first  iteration:     value= 1   accumulator = 0    return 1
// //second iteration:     value= 2   accumulator = 1    return undefined
// //third  iteration:     value= 3   accumulator = undefined    return NaN
// //fourth iteration:     value= 4   accumulator = NaN    return NaN
// //fifth  iteration:     value= 5   accumulator = NaN   return NaN
// //sixth  iteration:     value= 6   accumulator = NaN   return NaN
// let total = numbers.reduce(function (accumulator, value, index, array) {
// 	accumulator = accumulator + value;
// 	return accumulator;
// }, 0);

// console.log(total);

//sort
// let numbers = [1, 5, 2, 62, 4, 7, 8];
// let string = ["alpha", "gamma", "bravo", "jupiter", "charlie"];
// console.log(numbers);
// numbers.sort(function (first, second) {
// 	console.log("first: ", first, "second: ", second);
// 	if (first < second) return -1;
// 	if (first > second) return 1;
// 	return 0;
// });
// console.log(numbers);

//filter
// let numbers = [1, 2, 3, 4, 5, 6];
// let family = [
// 	{
// 		firstname: "John",
// 		lastname: "Doe",
// 		isParent: true,
// 	},
// 	{
// 		firstname: "Jane",
// 		lastname: "Doe",
// 		isParent: true,
// 	},
// 	{
// 		firstname: "Jenny",
// 		lastname: "Doe",
// 		isParent: false,
// 	},
// ];
// let filteredNumbers = numbers.filter(function (value, index, filter) {
// 	if (value % 2 == 1) return true;
// });
// console.log(filteredNumbers);
// console.log(numbers);

// let parents = family.filter(function (value) {
// 	// console.log(value);
// 	return !value.isParent; // false output = true
// });

// // if (a && b && c || d) {
// // }

// // //   a   b   c   d       a && b && c || d
// // //	 0   0   0   1              1
// // //   0   0   1   1              1

// console.log(parents);

//foreach
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = [];
// console.log(numbers);
// numbers.forEach(function (value, index, array) {
// 	newNumbers.push(value * index);
// });
// console.log(newNumbers);
// console.log(numbers);

//includes
// let numbers = [1, 2, 3, 4, 5];
// let isPresent = numbers.includes(1);
// console.log(isPresent);
// let family = [
// 	{
// 		firstname: "John",
// 		lastname: "Doe",
// 		isParent: true,
// 	},
// 	{
// 		firstname: "Jane",
// 		lastname: "Doe",
// 		isParent: true,
// 	},
// 	{
// 		firstname: "Jenny",
// 		lastname: "Doe",
// 		isParent: false,
// 	},
// ];
// let isPresent = family.includes({
// 	firstname: "John",
// 	lastname: "Doe",
// 	isParent: true,
// });
// console.log(isPresent);

// let names = ["jane", "john", "james"];
// let isPresent = names.includes("jane");
// console.log(isPresent);

//Array.isArray
// let array = "sdf";
// let isArray = Array.isArray(array);
// console.log(isArray);

//==================Array Methods==================\\

//=====================Promises=====================\\

// let promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		return reject("hello");
// 	}, 3000);
// });
// console.log(promise);

// setTimeout(() => {
// 	console.log(promise);
// }, 4000);

let slowAddition = function (first, second) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (typeof first !== "number" || typeof second !== "number") {
				reject("First or Second Parameters are not numbers!");
			} else {
				resolve(first + second);
			}
		}, 1000);
	});
};
let slowMultiplication = function (first, second) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (typeof first !== "number" || typeof second !== "number") {
				reject("First or Second Parameters are not numbers!");
			} else {
				resolve(first * second);
			}
		}, 1000);
	});
};

// let slowSum = slowAddition(1,"2");
// console.log(slowSum);
// setTimeout(() => {
// 	console.log(slowSum);
// }, 1500);

let slowSum = slowAddition(1, 2)
	.then(function (sum) {
		console.log("sum: ", sum);
		return slowMultiplication(sum, 2);
	})
	.then(function (product) {
		console.log("product: ", product);
		return slowAddition(product, 3);
	})
	.then(function (sum2) {
		console.log("second sum: ", sum2);
	})
	.catch(function (message) {
		console.log("catch callback: ", message);
	});

//=====================Promises=====================\\
