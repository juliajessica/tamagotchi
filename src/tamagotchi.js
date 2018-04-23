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

  fatigue() {
    setInterval(() => {
      this.attention--;
    }, 6000);
  }



}//close class

export { Tamagotchi };
