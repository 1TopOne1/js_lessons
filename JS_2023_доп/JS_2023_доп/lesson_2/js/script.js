/*
//   ЗАДАЧА 0   

//1. Введення необхідних даних

let a = parseFloat(prompt('Введіть значення числа a','0'))
let b = parseFloat(prompt('Введіть значення числа b','0'))
let c = parseFloat(prompt('Введіть значення числа c','0'))
//2. Обчислення результату
 let s1 = a + 12 + b
 let s2 = Math.sqrt((a+b)/(2*a))
 let s3 = Math.cbrt((a+b)/c)
 let s4 = Math.sin(a/-b)
//3. Виведення результату
document.write (`<p>Результати:<p>
						s1 = ${s1}<br>
						s2 = ${s2}<br>
						s3 = ${s3}<br>
						s4 = ${s4}<br>`)
)

*/

//========================================================================================================================================================

/*
// ЗАДАЧА 1
// Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у форті таблиці.

//1. Введення необхідних даних

let a = parseFloat(prompt('Введіть значення числа a','0'))
let b = parseFloat(prompt('Введіть значення числа b','0'))

//2.Обчислення результату

let s1 =  a + b
let s2 = a * b
let s3 = a / b

//3. Виведення результату

document.write(`
<table>
		<tr>
			<td> *********** </td>
		</tr>
	<tr>
		<td>Сума</td>
		<td>${s1}</td>
	</tr>

	<tr>
		<td>Добуток</td>
		<td>${s2}</td>
	</tr>

	<tr>
		<td>Частка</td>
		<td>${s3}</td>
	</tr>
		</table>
		`)
	

*/
//========================================================================================================================================================
/*
// ЗАДАЧА 2

// Дано рік народження(дата:1січня) та поточний рік. Знайти кількість років.
let a = parseInt(prompt('Введіть рік народження','0'))
let b = 2023
let sum = b - a 
document.write ("Ваш вік = " +sum+ "р")
*/
//========================================================================================================================================================
/*
// ЗАДАЧА 3
// Дано вартість одиниці товару і кількість. Знайти загальну вартість тп ПДВ (5% від загальної вартості).
let oneAmount = parseFloat(prompt('Введіть кількість товару','0'))
let onePrice = parseFloat(prompt('Введіть вартість одного товару','0'))
let percent = 5
let allPrice = oneAmount * onePrice
document.write ("Загальна вартість товару = "  +allPrice+ " грн <br>")
let vat = (allPrice * percent / 100)
document.write ("5% ПДВ від загальної вартості товару = " +vat+ " грн")
*/
//========================================================================================================================================================
/*
//   ЗАДАЧА 4  

		//1. Введення необхідних даних
		let lengthInCentimeters = parseFloat(prompt("Введіть довжину у сантиметрах", '0'))

		//2. Обчислення результату
		let lengthInMeters = lengthInCentimeters / 100
		let lengthInKilometrs = lengthInCentimeters / 100000

		//3. Виведення результату
		document.write(`<p> Метри: ${lengthInMeters}</p>
		<p> Кілометри: ${lengthInKilometrs}</p>`)
		*/

//========================================================================================================================================================
/*
	//   ЗАДАЧА 5 

		//1. Введення необхідних даних
		let numberOfSeconds = parseInt(prompt("Введіть кількість секунд", '0'))

		//2. Обчислення результату
		let numberOfMinutes = Math.floor(numberOfSeconds / 60).toFixed(1)
		let numberOfHours = Math.floor(numberOfMinutes / 60).toFixed(2)

		//3. Виведення результату
		document.write (`<p> Хвилини: ${numberOfMinutes}</p>
		<p> Години: ${numberOfHours}</p>`)
*/
//========================================================================================================================================================

/*
//   ЗАДАЧА 6  

		//1. Введення необхідних даних
		let priceFirstProduct = parseFloat(prompt ('Введіть вартість першого товару', '0'))
		let amountFirstProduct = parseFloat(prompt ('Введіть кількість першого товару', '0'))
		let priceSecondProduct = parseFloat(prompt ('Введіть вартість другого товару', '0'))
		let amountSecondProduct = parseFloat(prompt ('Введіть кількість другого товару', '0'))
		let priceThirdProduct = parseFloat(prompt ('Введіть вартість третього товару', '0'))
		let amountThirdProduct = parseFloat(prompt ('Введіть кількість третього товару', '0'))

		//2. Обчислення результату
		let allPriceFirstProduct = priceFirstProduct * amountFirstProduct
		let allPriceSecondProduct = priceSecondProduct * amountSecondProduct
		let allPriceThirdProduct = priceThirdProduct * amountThirdProduct
		let allPrice = allPriceFirstProduct + allPriceSecondProduct + allPriceThirdProduct

		//3. Виведення результату
		document.write(`
		<table border="3px">
			<tr>
				<td> Вартість одного товару(грн.)</td>
				<td>Кількість (шт.)</td>
				<td>Вартість (грн.)</td>
			</tr>

			<tr>
				<td>${priceFirstProduct}</td>
				<td>${amountFirstProduct}</td>
				<td>${allPriceFirstProduct}</td>
			</tr>
			<tr>
				<td>${priceSecondProduct}</td>
				<td>${amountSecondProduct}</td>
				<td>${allPriceSecondProduct}</td>
			</tr>
			<tr>
				<td>${priceThirdProduct}</td>
				<td>${amountThirdProduct}</td>
				<td>${allPriceThirdProduct}</td>
			</tr>

			<h4>Загальна вартість: ${allPrice} грн </h4>
		</table>	
	`)
 */
//========================================================================================================================================================
/*
//   ЗАДАЧА 07 

		//1. Введення необхідних даних
		let min = 1, max = 12
		let numberMonth = min + Math.floor(Math.random()*(max - min + 1))
		let min2 = 0, max2 = 6
		let numberDay = min2 + Math.floor(Math.random()*(max2 - min2 + 1))

		//2. Обчислення результату
		
		let sum = numberMonth + numberDay
		//3. Виведення результату
		document.write (`<p>Сума двох випадкових номерів =  ${sum}</p>`)

*/
