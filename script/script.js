const niggaOne = 15.678;
const niggaTwo = 123.965;
const niggaThree = 90.2345;

let max = Math.max(niggaOne, niggaTwo, niggaThree);
console.log(`Максимальне значеня:  ${max}`);
document.writeln(`<p>Максимальне значеня:  ${max}</p>`);

let min = Math.min(niggaOne, niggaTwo, niggaThree);
console.log(`Мінімальне значеня: ${min}`);
document.writeln(`<p>Мінімальне значеня: ${min}</p>`);

let suma = niggaOne + niggaTwo + niggaThree;
console.log(`Сума: ${suma}`);
document.writeln(`<p>Сума: ${suma}</p>`);

let sumaOfIntegers = Math.floor(niggaOne) + Math.floor(niggaTwo) + Math.floor(niggaThree);
console.log(`Сума цілих чисел: ${sumaOfIntegers}`);
document.writeln(`<p>Сума цілих чисел: ${sumaOfIntegers}</p>`);

let sumaOfHundreds = (Math.round(suma/100))*100;
console.log(`Сума окуглена до сотень: ${sumaOfHundreds}`);
document.writeln(`<p>Сума окуглена до сотень: ${sumaOfHundreds}</p>`);

if(Math.floor(suma)%2===0)
{
console.log(`Парне, ${true}`)
document.writeln(`<p>Парне, ${true}</p>`)
}else
    console.log(`Непарне, ${false}`)
    document.writeln(`<p>Непарне, ${false}</p>`)

let rest = 500 - suma;
console.log(`Решта, ${rest}грн`);
document.writeln(`<p>Решта, ${rest}грн</p>`);

let avengare = (suma/3).toFixed(2);
console.log(`Середнє значення: ${avengare}`);
document.writeln(`<p>Середнє значення: ${avengare}</p>`);

let randomDiscount = Math.round(Math.random()*(100-0)+0);
console.log(`Рандомна знмжка: ${randomDiscount}%`);
document.writeln(`<p>Рандомна знмжка: ${randomDiscount}%</p>`);

let sumaWithDiscount = (suma*(randomDiscount/100)).toFixed(2);
console.log(`Ціна зі знижкою, ${randomDiscount}%: , ${sumaWithDiscount}грн`);
document.writeln(`<p>Ціна зі знижкою, ${randomDiscount}%: , ${sumaWithDiscount}грн</p>`);

let profit = (suma - (suma/2) - sumaWithDiscount).toFixed(2);
console.log(`Чистий прибуток: ${profit}грн`);
document.writeln(`<p>Чистий прибуток: ${profit}грн</p>`);