//use array insdie an object

const adventurer = {
  name: 'Kolten',
  hitPoints: 10,
  belongings: ['sword','potion', 'medicine'],
  companion: {
    name: 'stinky',
    type: 'Cat',
    belongings: ['ball of yarn', 'healing potions', 'health insurance', 'satchel of elements']
  }
}

console.log(adventurer.companion.name);
console.log(`One of my companions belongings is ${adventurer.companion.belongings[2]}`);

//access the values in the array

console.log(adventurer.belongings);

//access a specific item in the belongings array

console.log(` first belonging: ${adventurer.belongings[0]}`);

//iterate over an array that is within an object

for (let i=0; i < adventurer.belongings.length; i++) {
  console.log(adventurer.belongings[i]);
}

//#1 OBJ withing OBJ

const movies = [
  {
    title: 'Tokyo Story'
  },
  {
    title: 'Paul Blart: Mall Cop'
  },
  {
    title: "L'Avventura"
  }
];

console.log(movies[0].title); //object

//looping over array of objects

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].title);
}

//combine objects, arrays, and functions

// const foo = {
//   arr: [1,2,3],
//   obj: {
//     prop: 'object property'
//   },
//   doSomething: () => {
//     console.log('I did something!');
//   }
// }

// console.log(foo.arr[0]); //1
// console.log(foo.obj.prop); //object property
// foo.doSomething();

// an array of arrays

const foo = [
  [1, 2, 3],
  ['4', '5', '6'],
  [7, 8, 9],
  ()=>{
    console.log('i am a function inside an array');
  }
]

console.log(foo[0]); //[]
console.log(foo[0][1]); //2

//storing functions in an array
console.log(foo[3]());