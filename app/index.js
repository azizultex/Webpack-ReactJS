import { student, teacher } from './data.js';

import Dog from './dog.js';

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
console.log(cat);
console.log(cat.getInfo());
