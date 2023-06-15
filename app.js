// // // // // //use array insdie an object

// // // // // const adventurer = {
// // // // //   name: 'Kolten',
// // // // //   hitPoints: 10,
// // // // //   belongings: ['sword','potion', 'medicine'],
// // // // //   companion: {
// // // // //     name: 'stinky',
// // // // //     type: 'Cat',
// // // // //     belongings: ['ball of yarn', 'healing potions', 'health insurance', 'satchel of elements']
// // // // //   }
// // // // // }

// // // // // console.log(adventurer.companion.name);
// // // // // console.log(`One of my companions belongings is ${adventurer.companion.belongings[2]}`);

// // // // // //access the values in the array

// // // // // console.log(adventurer.belongings);

// // // // // //access a specific item in the belongings array

// // // // // console.log(` first belonging: ${adventurer.belongings[0]}`);

// // // // // //iterate over an array that is within an object

// // // // // for (let i=0; i < adventurer.belongings.length; i++) {
// // // // //   console.log(adventurer.belongings[i]);
// // // // // }

// // // // // //#1 OBJ withing OBJ

// // // // // const movies = [
// // // // //   {
// // // // //     title: 'Tokyo Story'
// // // // //   },
// // // // //   {
// // // // //     title: 'Paul Blart: Mall Cop'
// // // // //   },
// // // // //   {
// // // // //     title: "L'Avventura"
// // // // //   }
// // // // // ];

// // // // // console.log(movies[0].title); //object

// // // // // //looping over array of objects

// // // // // for (let i = 0; i < movies.length; i++) {
// // // // //   console.log(movies[i].title);
// // // // // }

// // // // // //combine objects, arrays, and functions

// // // // // // const foo = {
// // // // // //   arr: [1,2,3],
// // // // // //   obj: {
// // // // // //     prop: 'object property'
// // // // // //   },
// // // // // //   doSomething: () => {
// // // // // //     console.log('I did something!');
// // // // // //   }
// // // // // // }

// // // // // // console.log(foo.arr[0]); //1
// // // // // // console.log(foo.obj.prop); //object property
// // // // // // foo.doSomething();

// // // // // // an array of arrays

// // // // // const foo = [
// // // // //   [1, 2, 3],
// // // // //   ['4', '5', '6'],
// // // // //   [7, 8, 9],
// // // // //   ()=>{
// // // // //     console.log('i am a function inside an array');
// // // // //   }
// // // // // ]

// // // // // console.log(foo[0]); //[]
// // // // // console.log(foo[0][1]); //2

// // // // // //storing functions in an array
// // // // // console.log(foo[3]());

// // // // // //creating a class

// // // // class Character {
// // // //   constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
// // // //     this.legs = 2;
// // // //     this.arms = 2;
// // // //     this.name = name;
// // // //     this.age = age;
// // // //     this.eyes = eyes;
// // // //     this.hair = hair;
// // // //     this.lovesCats = lovesCats;
// // // //     this.lovesDogs = lovesDogs || true;
// // // //   }

// // // //   setHairColor (hairColor) {
// // // //     this.hair = hairColor;
// // // //   }
// // // //   //method1
// // // //   greet (otherCharacter) {
// // // //     console.log(`hello ${otherCharacter}`);
// // // //   }
// // // //   //method2
// // // //   smite () {
// // // //     console.log('I smite thee you vile person!');
// // // //   }
// // // // }

// // // // const goku = new Character();
// // // // const vegeta = new Character();

// // // // // goku.greet('vegeta');
// // // // // vegeta.greet('kakarot');
// // // // // goku.smite()

// // // // //name, age, eyes, hair

// // // // const broly = new Character('Broly', 30, 'brown', 'black', false, true);
// // // // broly.eyes = 'green';
// // // // broly.setHairColor('yellow')
// // // // console.log(broly);

// // // class Character {
// // //   constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
// // //     this.legs = 2;
// // //     this.arms = 2;
// // //     this.name = name;
// // //     this.age = age;
// // //     this.eyes = eyes;
// // //     this.hair = hair;
// // //     this.lovesCats = lovesCats;
// // //     this.lovesDogs = lovesDogs || true;
// // //   }
// // //   greet (otherCharacter) {
// // //     console.log('hi ' + otherCharacter + '!');
// // //   }
// // //   classyGreeting (otherClassyCharacter) {
// // //     console.log('Howdy ' + otherClassyCharacter.name + '!');
// // //   }
// // //   setHair (hairColor) {
// // //     this.hair = hairColor;
// // //   }
// // //   smite () {
// // //     console.log('i smited thee.');
// // //   }

// // // }
// // //   const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
// // //   console.log(hobbit);

// // // class Hobbit extends Character {
// // //   constructor(name, age, eyes, hair){
// // //     super(name, age, eyes, hair);
// // //     this.skills = ['thievery', 'speed', 'willpower']
// // //   }
// // //   steal () {
// // //     console.log('lets get away!');
// // //   }

// // //   smite() {
// // //     super.smite();
// // //     this.steal();
// // //   }
// // // }
// // // 
// // // const frodo = new Hobbit('frodo', 30, 'blue', 'black')
// // // console.log(frodo);
// // // frodo.classyGreeting(hobbit);
// // // frodo.smite();

// // //factory functions

// // class Car {
// //   constructor(make, vin) {
// //     this.make = make;
// //     this.vin = vin;
// //   }
// //   //methods
// //   drive() {
// //     console.log('vroom vroom');
// //   }
// // }

// // //create an object

// // const mazda = new Car('Mazda', 123456);
// // console.log(mazda);

// // class Factory {
// //   constructor(company) {
// //     this.company = company;
// //     this.cars = [];
// //   }

// //   generateCar() {
// //     const newCar = new Car(this.company, this.cars.length);
// //     this.cars.push(newCar)
// //   }

// //   findCar (index) {
// //     return this.cars[index]
// //   }
// // }

// // const tesla = new Factory('Tesla');
// // console.log(tesla);
// // tesla.generateCar();
// // tesla.generateCar();
// // tesla.generateCar();
// // tesla.generateCar();
// // console.log(tesla);
// // //find car
// // console.log(tesla.findCar(0));


// // const porche = new Factory('Porche');
// // porche.generateCar();
// // porche.generateCar();
// // porche.generateCar();
// // porche.generateCar();

// // console.log(porche);

// //static

// // class Person {
// //   static eyeColor() {
// //     return ['blue', 'green', 'brown']
// //   }
// //   //
// // }

// class Person {
//   constructor(name, age, eyeColor, hair) {
//     this.name = name;
//     this.age = age;
//     this.hair = hair;
//     this.eyeColor = eyeColor;
//   }
//   static eyeColor() {
//     return ['blue', 'green', 'brown']
//   }
// }

// class SuperHero extends Person {

// }

// const superman = new SuperHero('Clark Kent', 30, Person.eyeColor()[0], 'black')

// class Governor {
//   static termLength = 4;
//   static country = 'USA';
//   static greeting() {
//     console.log(`My fellow Americans, I say to you Hello.`);
//   }
//   static callSecurity() {
//     console.log('HELP!');
//   }
  
// }



// console.log(Governor);
// Governor.greeting();
// Governor.callSecurity();

class Person {
  constructor(name, age, eyeColor) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
  }
  sayHello() {
    console.log(`Hi, my name is ${this.name}.`);
  }
  sayAge() { 
    console.log(`I am ${this.age} years old.`);
  }
  sayEyeColor() {
    console.log(`I have ${this.eyeColor} colored eyes.`);
  }
};

class PostalWorker extends Person {
  constructor(name, age, eyeColor, officeLocation, driver) {
    super(name, age, eyeColor);
    this.officeLocation = officeLocation;
    this.driver = driver;
  }
  dropOff() {
    console.log(`${this.name} is delivering the mail.`);
  }
  pickUp() {
    console.log(`${this.name} is picking up the mail.`);
  }
};

class Chef extends Person  {
  constructor(name, age, eyeColor, foodType, headChef) {
    super(name, age, eyeColor)
    this.foodType = foodType;
    this.headChef = headChef;
  }
  cook() {
    console.log(`${this.name} is cooking the food.`);
  }
  prep() {
    console.log(`${this.name} is prepping the food.`);
  }
};

const billyBob = new PostalWorker('billybob', 40, 'hazel', 'Boone', false);
const timmyTom = new PostalWorker('TimmyTom', 35, 'blue', 'Ashe', true);



const gordonRamsay = new Chef('Gordon Ramsay', 50, 'blue', 'Michelin Star', true);
const ronaldMcDonald = new Chef('Ronald McDonald', 90, 'brown', 'fast food', true);

console.log(billyBob);
console.log(timmyTom);
console.log(gordonRamsay);
console.log(ronaldMcDonald);

billyBob.sayHello();
billyBob.sayAge();
billyBob.sayEyeColor();
billyBob.dropOff();
billyBob.pickUp();

timmyTom.sayHello();
timmyTom.sayAge();
timmyTom.sayEyeColor();
timmyTom.dropOff();
timmyTom.pickUp();

gordonRamsay.sayHello();
gordonRamsay.sayAge();
gordonRamsay.sayEyeColor();
gordonRamsay.cook();
gordonRamsay.prep();

ronaldMcDonald.sayHello();
ronaldMcDonald.sayAge();
ronaldMcDonald.sayEyeColor();
ronaldMcDonald.cook();
ronaldMcDonald.prep();