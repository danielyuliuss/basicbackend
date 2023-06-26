const Tiger = require("./Tiger");
const {Wolf,daniel} = require("./Wolf");
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    console.log(daniel);
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    console.log(daniel);
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);