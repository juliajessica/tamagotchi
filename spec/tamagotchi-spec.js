import { Tamagotchi } from "./../src/tamagotchi.js";

describe('Tamagotchi', function() {
  let tamagotchi;
  let tamagotchi2;

  beforeEach(function() {
    tamagotchi = new Tamagotchi(100, 100, 100);
    tamagotchi2 = new Tamagotchi(50, 50, 50);
    jasmine.clock().install();
    tamagotchi.isAlive();
    tamagotchi.hunger();
    tamagotchi.boredom();
    tamagotchi.fatigue();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should create tamagotchi with 100 food, attention and rest', function() {
    expect(tamagotchi.food).toEqual(100);
    expect(tamagotchi.attention).toEqual(100);
    expect(tamagotchi.rest).toEqual(100);
  });

  it('should decrease food level by 1 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(tamagotchi.food).toEqual(99);
  });

  it('should decrease attention level by 2 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(tamagotchi.attention).toEqual(98);
  });

  it('should decrease energy level by 1 after 6001 milliseconds', function() {
    jasmine.clock().tick(6001);
    expect(tamagotchi.rest).toEqual(99);
  });

  it('should increase food level by 20 after feed, attention by 5 after tickle, rest by 15 after sleep', function() {
    tamagotchi2.feed();
    tamagotchi2.tickle();
    tamagotchi2.sleep();
    expect(tamagotchi2.food).toEqual(70);
    expect(tamagotchi2.attention).toEqual(55);
    expect(tamagotchi2.rest).toEqual(65);
  });

  it('should set tamagotchi isAlive to false when food or rest level reach 0', function() {
    jasmine.clock().tick(30001);
    expect(tamagotchi.isAlive.toEqual(false);
  });

});
