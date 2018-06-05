'use strict';

//task 1
function tax(taxFee) {
	var taxSum = 0;

	function calcSum(price) {
		var taxPay = price * (taxFee / 100);
		taxSum = taxSum + taxPay;
		console.log(`Налог с продаж (${taxFee} %), к оплате: ${taxSum} Q`);
	}
	return calcSum;
}

var calcTax = tax(73);
calcTax(50);
calcTax(100);
calcTax(1000);

//task 2
function pack() {
	var paperArea = 30;
	var packageArea;

	function calcArea(length, width, height) {
		packageArea = 2 * (length * width + length * height + width * height);
		if (paperArea >= packageArea) {
			paperArea -= packageArea;
			console.log(
				`Заказ (${length} м/${width} м/${height} м) упакован, осталось упаковочной бумаги ${Math.ceil(
					paperArea
				)} м2`
			);
			return true;
		} else {
			console.log(
				`Заказ (${length} м/${width} м/${height} м) не упакован, осталось упаковочной бумаги ${Math.ceil(
					paperArea
				)} м2`
			);
			return false;
		}
	}
	return calcArea;
}

var calcSq = pack();
calcSq(1.1, 1.5, 2);
calcSq(1, 1, 1);
calcSq(10, 10, 10);

//task 3
const teleportsCharge = [7, 2, 1, 4, 8];
const teleportsChargeCounters = [];

const chargeHandler = (teleportNumber) => {
	return () => {
		if (teleportsCharge[teleportNumber] > 1) {
			teleportsCharge[teleportNumber] -= 1;
			console.log(
				`Телепорт ${teleportNumber + 1} использован, заряд — ${teleportsCharge[
					teleportNumber
				]} единиц`
			);
		} else if (teleportsCharge[teleportNumber] === 1) {
			teleportsCharge[teleportNumber] -= 1;
			console.log(
				`Телепорт ${teleportNumber + 1} использован, заряд — ${teleportsCharge[
					teleportNumber
				]} единиц, требуется перезарядка!`
			);
		} else {
			console.log(`Телепорт ${teleportNumber + 1} недоступен, перезаряжается`);
		}
	};
};

for (let i = 0; i < teleportsCharge.length; i++) {
	teleportsChargeCounters.push(chargeHandler(i));
}

for (let i = 0; i < teleportsChargeCounters.length; i++) {
	teleportsChargeCounters[i]();
}

teleportsChargeCounters[2]();

