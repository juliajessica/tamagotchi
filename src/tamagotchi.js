class Tamagotchi {
  constructor(food, attention, rest){
    this.food = food;
    this.attention = attention;
    this.rest = rest;
    this.age;
    this.status = true;
    this.sleep = false;
  }

  isAlive() {
    if (this.food <= 0 || this.rest <= 0) {
      this.status = false;
    } else {
      this.status = true;
    }
  }

  age() {
    this.age = 1;
    setInterval(() => {
      if (this.age <= 2) {
        this.age++;
      }
    }, 30000);
  }

  hunger() {
    setInterval(() => {
      if (this.food > 0) {
        this.food--;
      }
    }, 1500);
  }

  boredom() {
    setInterval(() => {
      if (this.attention > 0) {
        this.attention-=2;
      }
    }, 2500);
  }

  fatigue() {
    setInterval(() => {
      if (this.rest < 100 && this.sleep === true ) {
        this.rest++;
      } else if (this.rest > 0 && this.sleep === false) {
        this.rest--;
      }
    }, 3000);
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

  // sleep() {
  //   if (this.rest <= 95) {
  //     this.rest += 5;
  //   } else {
  //     this.rest = 100;
  //   }
  // }


}//close class

export { Tamagotchi };
