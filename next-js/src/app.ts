const userName = 'liminjun';
// userName = 'test';
let age = 30;
age = 29;

var version = '1.0';

console.log(version);

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld)

const add = (a: number, b:number = 20) => {
    return a + b;
};

console.log(add(2))

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', (event) => {
        console.log(event);
    })
}

const hobbies = ['sports','cooking'];

const activeHobbies = ['swiming'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    name: 'max',
    age: 30
};

const copiedPerson = { ...person};

console.log(copiedPerson);


const addNumbers = (...numbers: number[]) => {
    return numbers.reduce((curResult,curValue) => {
        return curResult + curValue;
    }, 0)
};

const result = addNumbers(5,10,2,3.7,20)

const [hobby1,hobyy2,...remainHobbies] = hobbies;


console.log(hobby1);
console.log(hobyy2);

