console.log("Starting Async-Await with try-catch");

// Callback Hell
let slowAddition = function (first, second) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof first !== "number" || typeof second !== "number") {
        reject("First or Second Parameters are not numbers!");
      } else {
        console.log(first, second);
        console.log("===========");
        resolve(first + second);
      }
    }, 2000);
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

// async function operation() {
// //   slowAddition(1, 2)
// //     .then(function (sum) {
// //       console.log("sum: ", sum);
// //       slowMultiplication(sum, 2)
// //         .then(function (product) {
// //           console.log("product: ", product);
// //           slowAddition("product", 3)
// //             .then(function (sum2) {
// //               console.log("second sum: ", sum2);
// //               slowAddition("product", 3)
// //                 .then(function (sum2) {
// //                   console.log("second sum: ", sum2);
// //                   slowAddition("product", 3)
// //                     .then(function (sum2) {
// //                       console.log("second sum: ", sum2);
// //                     })
// //                     .catch(function (message) {
// //                       console.log("catch callback: ", message);
// //                     });
// //                 })
// //                 .catch(function (message) {
// //                   console.log("catch callback: ", message);
// //                 });
// //             })
// //             .catch(function (message) {
// //               console.log("catch callback: ", message);
// //             });
// //         })
// //         .catch(function (message) {
// //           console.log("catch callback: ", message);
// //         });
// //     })
// //     .catch(function (message) {
// //       console.log("catch callback: ", message);
// //     });

//   try {
//   	let firstSlowAddition = await slowAddition(1, 2);
//   	console.log(firstSlowAddition);
//   	let firstSlowMultiplication = await slowMultiplication(firstSlowAddition, 2);
//   	console.log(firstSlowMultiplication);
//   	let secondSlowAddition = await slowAddition(firstSlowMultiplication, 3);
//   	console.log(secondSlowAddition);
//   } catch (err) {
//   	console.log(err);
//   }
// }
// operation();

// async function loopPromise() {
// 	try {
// 		let numbers = [1, 2, 3];
// 		for (let i = 0; i < numbers.length; i++) {
// 			const element = numbers[i];
// 			let result = await slowAddition(element, element + 1);
// 			console.log(result);
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// // what happened
// // ====first iteration
// // 										====second iteration
// // 																				====third iteration
// // better execution
// // ====first iteration
// // ====second iteration
// // ====third iteration
// loopPromise();

// async function promiseAll() {
// 	try {
// 		// let numbers = [1, 2, 3];
// 		// let listOfPromises = numbers.map(function (element) {
// 		// 	return slowAddition(element, element + 1);
// 		// });
// 		let listOfPromises = [slowAddition(1, 1 + 1), slowAddition(1, 1 + 1), slowAddition(1, 1 + 1)];
// 		let newNumbers = await Promise.all(listOfPromises);
// 		console.log(newNumbers);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// promiseAll();

// async function restApiRequest() {
// 	try {
// 		// slowAddition(1,2)
// 		// fetch("http://example.com/movies.json")
// 		// 	.then(function(response) { return response.json()})
// 		// 	.then(function(data) { return console.log(data)});
// 		let numbers = [1, 2, 3];
// 		for (let i = 0; i < numbers.length; i++) {
// 			await fetch("https://v2.jokeapi.dev/joke/programming?amount=2&type=single");
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// restApiRequest();

// Using Promise.all
// async function restApiRequest() {
// 	try {
// 		// slowAddition(1,2)
// 		// fetch("http://example.com/movies.json")
// 		// 	.then(function(response) { return response.json()})
// 		// 	.then(function(data) { return console.log(data)});
// 		let numbers = [1, 2, 3];
// 		let newNumbers = numbers.map(function () {
// 			return fetch("https://v2.jokeapi.dev/joke/programming?amount=2&type=single");
// 		});
// 		await Promise.all(newNumbers);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// restApiRequest();
