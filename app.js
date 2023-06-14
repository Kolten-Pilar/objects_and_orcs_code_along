//use array insdie an object

const adventurer = {
  name: 'Kolten',
  hitPoints: 10,
  belongings: ['sword','potion', 'medicine'],
  companion: {
    name: 'stinky',
    type: 'Cat'
  }
}

console.log(adventurer.companion.name);

//access the values in the array

console.log(adventurer.belongings);

//access a specific item in the belongings array

console.log(` first belonging: ${adventurer.belongings[0]}`);

//iterate over an array that is within an object

for (let i=0; i < adventurer.belongings.length; i++) {
  console.log(adventurer.belongings[i]);
}

//#1 OBJ withing OBJ

