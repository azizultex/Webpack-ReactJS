import { student, teacher } from './data.js';

import Dog from './dog.js';
import { add, multiply } from './calculator';

// console.log('Hello ES6 from webpack');
// console.log('Auto Updatessdf ')

// const averages = [6, 15.7, 9, 18, 22.1, 9.2, 4];
// const highlights = () => {
// 	return averages.filter( player => {
// 		return player > 15 
// 	});
// }

// console.log(highlights());

// console.log(student);
// console.log(teacher);

class Cat extends Dog{
	constructor(name, barking){
		super(name, barking);
	}
}

const cat = new Cat('Aduri', 'meow meow');
// console.log(cat);
// console.log(cat.getInfo());


// Spread operator 
// function a(...z){
// 	console.log(z);
// }
// a(4, 56,12);

// function butter(...z) {
//   let a = [1, 2, 3];
//   console.log([...a, ...z]);
// }

// butter(4, 5, 6);

// Destructuring assignment ( array ) 
let a = [5, 3, 6,4];
let [b, c] = a;
console.log(a, b, c);

// Destructuring assignment ( Object )
const obj = { name: 'Azizul', age: 25 }
const { name, age } = obj;
console.log(name, age);

//import / export
console.log(add(8, 2))
console.log(multiply(8, 2))


