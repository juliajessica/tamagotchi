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

}//close class

export { Tamagotchi };
