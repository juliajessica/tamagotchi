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
}

function genButtons(tamagotchi) {
  $("#feed").click(function(){
    tamagotchi.feed();
  });
  $("#tickle").click(function(){
    tamagotchi.tickle();
  });
  $("#sleep").click(function(){
    if (tamagotchi.sleep === true) {
      tamagotchi.sleep = false;
      $("#feed").show();
      $("#tickle").show();
    } else {
      tamagotchi.sleep = true;
      $("#feed").hide();
      $("#tickle").hide();
    }
    // tamagotchi.sleep();
  });
}

$(document).ready(function() {
  let tamagotchi = new Tamagotchi(100, 100, 100);
  initialize(tamagotchi);
  updateStats(tamagotchi);
  genButtons(tamagotchi);

  // ajax search for gifs
  $('#giphy-search').submit(function(event) {
    event.preventDefault();
    let userSearch = $('#keyword').val();

    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${process.env.API_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#giphy').empty();
        $('#giphy').append(`<img src="${response.data[12].images.downsized.url}" alt="giphy">`);
        $('#giphy').append(`<img src="${response.data[3].images.downsized.url}" alt="giphy">`);
        $('#giphy').append(`<img src="${response.data[4].images.downsized.url}" alt="giphy">`);
      },
      error: function() {
        $('#giphy').text("There was an error processing your request. Please try again.")
      }
    }); //closes ajax
  });
  // ajax search for weather
  $('#weather-search').submit(function(event) {
    event.preventDefault();
    let userSearchWeather = $('#weather-input').val();

    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${userSearchWeather}&appid=${process.env.OTHERAPI_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#weather-display').empty();
        $("#weather-display").append("<strong>City:</strong> " + response.name + "</br>");
        $("#weather-display").append("<strong>Humidity:</strong> " + response.main.humidity + "</br>");
        $("#weather-display").append("<strong>Daily High:</strong> " + response.main.temp_max + "</br>");
        $("#weather-display").append("<strong>Daily Low:</strong> " + response.main.temp_min + "</br>");

        console.log(response);

      },
      error: function() {
        $('#weather-display').text("There was an error processing your request. Please try again.")
      }
    }); //closes ajax
  });
});
