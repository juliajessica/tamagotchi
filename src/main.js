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
        // console.log(response);
        $('#giphy').append(`<img src="${response.data[12].images.downsized.url}" alt="giphy">`);
        $('#giphy').append(`<img src="${response.data[3].images.downsized.url}" alt="giphy">`);
        $('#giphy').append(`<img src="${response.data[4].images.downsized.url}" alt="giphy">`);
      },
      error: function() {
        $('#giphy').text("There was an error processing your request. Please try again.")
      }
    }); //closes ajax
  });
  $('#weather-search').submit(function(event) {
    event.preventDefault();
    let userSearchWeather = $('#weather-input').val();
    // ajax search for weather
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${userSearchWeather}&appid=${process.env.OTHERAPI_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#weather-display').empty();
        // console.log(response);
        $("#weather-display").append(`<iframe src="https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLEMAPSAPI_KEY}&q=${userSearchWeather}" allowfullscreen></iframe>`);
        $("#weather-display").append("<center><strong>City:</strong> " + response.name + "</br></center>");
        $("#weather-display").append("<center><strong>Humidity:</strong> " + response.main.humidity + "</br></center>");
        $("#weather-display").append("<center><strong>Daily High:</strong> " + response.main.temp_max + "</br></center>");
        $("#weather-display").append("<center><strong>Daily Low:</strong> " + response.main.temp_min + "</br></center>");
      },
      error: function() {
        $('#weather-display').text("There was an error processing your request. Please try again.")
      }
    }); //closes ajax
  });
});
