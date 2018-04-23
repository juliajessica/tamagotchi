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

  feed() {
    this.food += 20;
  }

  tickle() {
    this.attention += 5;
  }

  sleep() {
    this.rest += 15;
  }

}//close class

export { Tamagotchi };
