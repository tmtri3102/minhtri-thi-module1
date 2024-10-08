// Cau 2
function isFriendlyPair(a, b) {
	if (!Number.isInteger(a) || a <= 0 || !Number.isInteger(b) || b <= 0) {
		return false;
	}

	let sumA = getSum(a);
	let sumB = getSum(b);

	if (sumA == b && sumB == a) return true;
	else return false;
}

function getSum(n) {
	let sum = 0;
	for (let i = 1; i < n; i++) {
		if (n % i == 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(isFriendlyPair(220, 284)); // true
// console.log(isFriendlyPair(123, 456)); // false
