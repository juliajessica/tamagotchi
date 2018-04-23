class Tamagotchi {
  constructor(food, attention, rest){
    this.food = food;
    this.attention = attention;
    this.rest = rest;
    this.isAlive = this.isAlive();
  }

  isAlive() {
    setInterval(() => {
      if (this.rest <= 0 || this.food <= 0) {
        return false;
      } else {
        return true;
      }
    }, 1000);
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
