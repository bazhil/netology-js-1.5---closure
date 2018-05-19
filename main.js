//Домашнее задание к лекции 1.5 «Замыкания и область видимости»
'use strict';

//task 1
console.log('task 1');
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
console.log('task 2');
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
console.log('task 3');
var charge = [7, 2, 1, 4, 8];
var chargeOfTeleport = [];
var needCharge;

function teleportCharger() {
	function teleportCharger1(charge) {
		return charge[0] - 1;
	}

	function teleportCharger2(charge) {
		return charge[1] - 1;
	}

	function teleportCharger3(charge) {
		return charge[2] - 1;
	}

	function teleportCharger4(charge) {
		return charge[3] - 1;
	}

	function teleportCharger5(charge) {
		return charge[4] - 1;
	}

	if (needCharge === 1) {
		teleportCharger1();
	} else if (needCharge === 2) {
		teleportCharger2();
	} else if (needCharge === 3) {
		teleportCharger3();
	} else if (needCharge === 4) {
		teleportCharger4();
	} else if (needCharge === 5) {
		teleportCharger5();
	} else {
		return NaN;
	}

	chargeOfTeleport = [
		teleportCharger1,
		teleportCharger2,
		teleportCharger3,
		teleportCharger4,
		teleportCharger5,
	];

	for (var i; i < charge.length; i++) {
		if (charge[i] > 0) {
			chargeOfTeleport[i]();
			console.log(`Телепорт ${i + 1} использован, заряд — ${charge[i]} единиц`);
		} else if (charge[i] === 1) {
			chargeOfTeleport[i]();
			console.log(
				`Телепорт ${i + 1} использован, заряд — ${charge[
					i
				]} единиц, требуется перезарядка!`
			);
		} else if (charge[i] === 0) {
			console.log(`Телепорт ${i + 1} недоступен, перезаряжается`);
		} else {
			return NaN;
		}
		chargeOfTeleport[0]();
		chargeOfTeleport[1]();
		chargeOfTeleport[2]();
		chargeOfTeleport[3]();
		chargeOfTeleport[4]();
	}
}
