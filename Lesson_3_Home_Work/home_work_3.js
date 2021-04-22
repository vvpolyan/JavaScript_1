//"use script";
//3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные
//значения. Затем написать скрипт, который работает по следующему принципу:
//o если a и b положительные, вывести их разность;
//o если а и b отрицательные, вывести их произведение;
//o если а и b разных знаков, вывести их сумму;
//Ноль можно считать положительным числом.
var a = 3;
var b = -5;
if (a >= 0 && b >= 0)
    if (a > b)
        alert('Разность между a и b равна: ' + (a - b));
    else
        alert('Разность между b и a равна: ' + (b - a));
else if (a < 0 && b < 0)
    alert('Произведение a и b равно: ' + (a * b));
else
    alert('Сумма a и b равна: ' + (a + b));

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
//организовать вывод чисел от a до 15.
var a_1 = 3;
switch (a_1) {
    case 0:
        alert('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 1:
        alert('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 2:
        alert('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 3:
        alert('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 4:
        alert('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 5:
        alert('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 6:
        alert('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 7:
        alert('7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 8:
        alert('8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case 9:
        alert('9, 10, 11, 12, 13, 14, 15');
        break;
    case 10:
        alert('10, 11, 12, 13, 14, 15');
        break;
    case 11:
        alert('11, 12, 13, 14, 15');
        break;
    case 12:
        alert('12, 13, 14, 15');
        break;
    case 13:
        alert('13, 14, 15');
        break;
    case 14:
        alert('14, 15');
        break;
    case 15:
        alert('15');
        break;
}

//5. Реализовать четыре основные арифметические операции в виде функций с двумя
//параметрами. Обязательно использовать оператор return.
function c_d_sum(c, d) {
    return (c + d);
}
sum = c_d_sum(12, 223)
alert(sum)

function c_d_dif(c, d) {
    return (c - d);
}
dif = c_d_dif(12, 223)
alert(dif)

function c_d_mlt(c, d) {
    return (c * d);
}
mlt = c_d_mlt(12, 223)
alert(mlt)

function c_d_div(c, d) {
    return (c / d);
}
div = c_d_div(12, 223)
alert(div)

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
//зависимости от переданного значения выполнить одну из арифметических операций
//(использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 1:
            alert('Сложение arg1 + arg2 равно ' + (arg1 + arg2));
            break;
        case 2:
            alert('Вычетание arg1 - arg2 равно ' + (arg1 - arg2));
            break;
        case 3:
            alert('Умножение arg1 * arg2 равно ' + (arg1 * arg2));
            break;
        case 4:
            alert('Деление arg1 / arg2 равно ' + (arg1 / arg2));
            break;
        default:
            alert('Не верно число operation');
            break;
    }
    return 'OK'
}
result = mathOperation(12, 5, 3)
alert(result)