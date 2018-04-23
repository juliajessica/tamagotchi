import { Tamagotchi } from './tamagotchi';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

function updateStats(tamagotchi){
  setInterval(() => {
    $("#food").text(tamagotchi.food);
    $("#attention").text(tamagotchi.attention);
    $("#rest").text(tamagotchi.rest);
    $("#age").text(tamagotchi.age);
  }, 100);
}

$(document).ready(function() {
  $("#tamagotchi").html('<img src="img/1.gif" alt="image of tamagotchi">');
  let tamagotchi = new Tamagotchi(100, 100, 100);
  tamagotchi.age();
  tamagotchi.hunger();
  tamagotchi.boredom();
  tamagotchi.fatigue();
  updateStats(tamagotchi);

  $("#feed").click(function(){
    tamagotchi.feed();
  });

  $("#tickle").click(function(){
    tamagotchi.tickle();
  });

  $("#sleep").click(function(){
    tamagotchi.sleep();
  });

});
