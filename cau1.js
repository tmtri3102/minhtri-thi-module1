// Cau 1
// let arr = [1, 2, 3, 4, 6, 7]; // data mẫu, return 2

let inputArr = prompt("Nhập dãy số nguyên cách bởi dấu phẩy");
let stringArr = inputArr.split(",");
let arr = [];
let n = arr.length;
let sum = 0;

for (let i = 0; i < stringArr.length; i++) {
	let num = Number(stringArr[i].trim());
	if (Number.isInteger(num)) {
		arr.push(num);
	} else {
		alert("Dãy số nhập vào không hợp lệ");
	}
}

if (n <= 50 && n > 0) {
	for (let i = 0; 1, 2, 3, i < n; i++) {
		if (arr[i] % 2 !== 0 && i % 2 == 0) {
			sum += arr[i];
		}
	}
}

console.log(sum / n);
