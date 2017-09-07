class Dog {
	constructor(name, barking){
		this.name = name;
		this.barking = barking;
	}

	getInfo(){
		return `The animal name is ${this.name} and it barks like ${this.barking}`;
	}
}

export default Dog;