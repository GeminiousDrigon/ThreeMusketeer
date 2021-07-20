console.log("Starting Async-Await with try-catch");

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
