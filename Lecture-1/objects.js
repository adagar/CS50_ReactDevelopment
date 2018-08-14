const o = new Object();
o.firstName = "Jordon";
o.lastName = "Kubuyashi";
o.isTeaching = true;
o.greet = function() {
	console.log("hi!");
}

o.greet();

const o2 = {}; //alt, preferred way to create objects
o2.firstName = "Jordon";
o2['lastName'] = "Kubuyashi";
const key = 'isTeaching';
o2[key] = true;
o2['greet'] = function() {
	console.log("hullo!!");
}

o2.greet();

const o3 = {
	firstName: 'Nick',
	lastName: 'Garza',
	isTeaching: false,
	greet: function() {
		console.log("HEEEEIIII!!");
	},
	address: {
		street: 'frank',
		number: 28
	}
}

o3.greet();