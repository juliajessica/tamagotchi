class Tamagotchi {
  constructor(food, attention, rest){
    this.food = food;
    this.attention = attention;
    this.rest = rest;
  }

  hunger() {
    setInterval(() => {
      this.food--;
    }, 3000);
  }

  boredom() {
    setInterval(() => {
      this.attention-=2;
    }, 3000);
  }

  fatigue() {
    setInterval(() => {
      this.rest--;
    }, 6000);
  }


}//close class

export { Tamagotchi };
