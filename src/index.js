module.exports = function solveEquation(equation) {
	// your implementation

	let array = equation.split(' ');

	let a = array[0];

	let b = parseInt(array[3] + array[4], 10);
	let c = parseInt(array[7] + array[8], 10);
	// где 10 основание системы счисления
	// parseInt отсекает дробную часть числи

	let Dis = Math.sqrt((b * b) - (4 * a * c));
	let x1 = Math.round(((b - 2 * b) + Dis) / (2 * a));
	let x2 = Math.round(((b - 2 * b) - Dis) / (2 * a));
	// Метод Math.round() возвращает число, округлённое к ближайшему целому.
	
	if (x1 > x2){
		return [x2,x1];
	}
	else{
		return [x1,x2];
	}
}