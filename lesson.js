// - In a javaScript file, create a new Object myFatCat and give it five properties, including a weight. 
// - Define a method `eat()` on your object that increases myFatCat's weight by one pound, using the `this` keyword.
// - Define another method `meow()` **outside of the object**. 
// - Add the `meow()` method to the myFatCat object
// - Make the cat:
//  - meow
//  - console.log it's weight
//  - eat
//  - meow again
//  - console.log it's weight again
// - Paste your code in the thread below when done
// - 7 min. 

const myFatCat = {
	name: 'Garfield',
	age: 25,
	weight: 99,

	favoriteFood: 'Lagsna',
	eat: () => {
		myFatCat.weight++;
		// console.log(myFatCat.name + " now weighs " + myFatCat.weight + " pounds.")
	}
}
myFatCat.meow = () => { 
	console.log("Meow");
}

myFatCat.meow();
console.log(myFatCat.weight);
myFatCat.eat();
myFatCat.meow();
console.log(myFatCat.weight);

// - using one of the objects you used earlier today, use a for..in loop to console.log each key AND value
// - Paste your code in the thread below when done
// - 7 min. 
// function showProps(obj) {
//   // var result = "";
//   for (var key in obj) {
//     console.log(obj.name + "." + key + " = " + obj[key]);
//   }
// }
// showProps(myFatCat, "Cat");
for (var key in myFatCat) {
	console.log(myFatCat.name + "." + key + " = " + myFatCat[key]);
}

// - Create a `monkey` object, which has the following properties:
//  - `name`
//  - `species`
//  - `foodsEaten`
// - And the following methods:
//  - `eatSomething(thingAsString)`
//  - `introduce`: producers a string introducing itself, including its name, species, and what it's eaten
// - Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
// - Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets).
// - Paste your code in the thread below when done
// - 20 min. 
function monkey(theName, theSpecies) {
	this.name = theName;
	this.species = theSpecies;
	this.foodsEaten = [];
	this.eatSomething = function (food) {
		console.log(this.name + " ate " + food + ".");
		this.foodsEaten.push(food);
	};
	this.introduce = function () {
		let foodString = "";
		if (this.foodsEaten.length == 0) {
			foodString = "I haven't eaten."
		} else {
			foodString = "I ate " + this.foodsEaten;
		}
		console.log("Hi, my name is " + this.name + ", and my species is " + this.species + ", and " + foodString + ".");
	}
};

let caesar = new monkey ("Caesar", "Chimpanzee");
let maurice = new monkey ("Maurice", "Orangutan");
let buck = new monkey ("Buck", "Gorilla");

caesar.introduce();
maurice.introduce();
buck.introduce();

caesar.eatSomething("banana");
caesar.introduce();
maurice.eatSomething("PBJ");
maurice.introduce();
buck.eatSomething("ramen");
buck.eatSomething("Lego Batman");
buck.introduce();