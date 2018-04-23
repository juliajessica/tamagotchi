class Tamagotchi {
  constructor(food, attention, rest){
    this.food = food;
    this.attention = attention;
    this.rest = rest;
    this.age;
    this.isAlive;
  }

  isAlive() {
    if (this.rest <= 0 || this.food <= 0) {
      return false;
    } else {
      return true;
    }
  }

  age() {
    this.age = 0;
    setInterval(() => {
      this.age++;
    }, 10000);
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
    if (this.food <= 93) {
      this.food +=7;
    } else {
      this.food = 100;
    }
  }

  tickle() {
    if (this.attention <= 98) {
      this.attention +=2;
    } else {
      this.attention = 100;
    }
  }

  sleep() {
    if (this.rest <= 95) {
      this.rest += 5;
    } else {
      this.rest = 100;
    }
  }

}//close class

export { Tamagotchi };
