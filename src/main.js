import { Tamagotchi } from './tamagotchi';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

function updateStats(tamagotchi) {
  setInterval(function() {
    tamagotchi.isAlive();
    if (tamagotchi.status === false) {
      $("#tamagotchi").html('<img src="img/dead.gif" alt="image of tamagotchi"><p>Your Tamagotchi has died of neglect :(</p>');
      $(".stats").hide();
      $(".actions").hide();
    } else {
      $("#tamagotchi").html('<img src="img/' + tamagotchi.age + '.gif" alt="image of tamagotchi">');
      $("#food").text(tamagotchi.food);
      $("#attention").text(tamagotchi.attention);
      $("#rest").text(tamagotchi.rest);
      $("#age").text(tamagotchi.age);
    }
  }, 100);
}

function initialize(tamagotchi) {
  tamagotchi.age();
  tamagotchi.hunger();
  tamagotchi.boredom();
  tamagotchi.fatigue();
  $("#feed").click(function(){
    tamagotchi.feed();
  });
  $("#tickle").click(function(){
    tamagotchi.tickle();
  });
  $("#sleep").click(function(){
    tamagotchi.sleep();
  });
}

$(document).ready(function() {
  let tamagotchi = new Tamagotchi(100, 100, 100);
  initialize(tamagotchi);
  updateStats(tamagotchi);
});
