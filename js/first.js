/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

const arr = [1, 2, 3, 4];
function brutto(array) {
	array = array.forEach((element) => element * 1.27);
	array = array.reduce(
		(previousValue, currentValue) => previousValue + currentValue
	);
	return array;
}

console.log(brutto(arr));
