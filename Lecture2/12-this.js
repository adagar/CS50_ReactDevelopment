const person = {
    name: "Nick",
    greet: function(){console.log("Hello, I'm " + this.name)}
}

person.greet();



const friend = {
    name: "david"
}

friend.greet = person.greet;
friend.greet();
//this.name = "Billy";
const greet = person.greet.bind({name: 'this is a bound object'});
person.greet.call({name: 'this is a bound object'});
person.greet.apply({name: 'this is a bound object'});

const newPerson = {
    name: 'newPerson',
    greet: () => {console.log(this.name)}
}
newPerson.greet();
