"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'liminjun';
// userName = 'test';
var age = 30;
age = 29;
var version = '1.0';
console.log(version);
// if (age > 20) {
//     let isOld = true;
// }
// console.log(isOld)
var add = function (a, b) {
    if (b === void 0) { b = 20; }
    return a + b;
};
console.log(add(2));
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) {
        console.log(event);
    });
}
var hobbies = ['sports', 'cooking'];
var activeHobbies = ['swiming'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    firstName: 'max',
    age: 30
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
var addNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var result = addNumbers(5, 10, 2, 3.7, 20);
var hobby1 = hobbies[0], hobyy2 = hobbies[1], remainHobbies = hobbies.slice(2);
console.log(hobby1);
console.log(hobyy2);
var firstName = person.firstName, age = person.age;
