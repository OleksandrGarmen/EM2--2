/*
TASK#1 | LEVEL 1
const prompt = require('prompt-sync')();
const name = prompt("Введіть своє ім'я: ")
const surname = prompt("Введіть свою фамілію: ")

function check(){
    if(!name || !surname){
        console.log("Ім'я та прізвище не можуть бути порожніми.")
        return null
    }
    return { fullName: `${name} ${surname}` };
}

const user = check();

if (user) {
    console.log("Об'єкт користувача:", user);
}
*/




/*
TASK#2| LEVEL 1
const prompt = require('prompt-sync')();
const login = prompt("Введіть ваш логін: ")
const password = prompt("Введіть ваш пароль: ")

function checkCredentials (inputLogin, inputPassword){
    if( inputLogin === "admin" || inputPassword ==="12345")
        check("Вхід успішний")
    else{
        check("Доступ заборонено")
    }
    checkCredentials( login, password);
}
    */


/*
TASK#1 | LEVEL 2
const prompt = require('prompt-sync')();

function checkText(value) {
    return value && value.length > 5;
}

function checkNumber(value) {
    return Number(value) > 0;
}

const productName = prompt("Введіть ім'я товару: ");
const productDescription = prompt("Введіть опис товару: ");
const productQuantity = prompt("Введіть кількість товару: ");
const productPrice = prompt("Введіть ціну товару: ");


const quantity = Number(productQuantity);
const price = Number(productPrice);

if (checkText(productName) && checkText(productDescription) && checkNumber(quantity) && checkNumber(price)) {
    const product = {
        name: productName,
        description: productDescription,
        quantity: quantity,
        price: price
    };
    
    console.log("Об'єкт товару створено:", product);
} else {
    console.log("Неправильні дані");
}
 */