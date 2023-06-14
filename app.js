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