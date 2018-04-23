import { Tamagotchi } from "./../src/tamagotchi.js";

describe('Tamagotchi', function() {
  let tamagotchi;

  beforeEach(function() {
    tamagotchi = new Tamagotchi(100, 100, 100);
    jasmine.clock().install();
    tamagotchi.hunger();
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
    jasmine.clock().tick(6001);
    expect(tamagotchi.food).toEqual(98);
  });

});
