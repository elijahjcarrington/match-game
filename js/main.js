/*https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-8/Match+Game/solution/resources/js/match-game.js*/

var MatchGame = {};

/*
  Generates random card values from sequential values in array
*/

$(document).ready(function() {
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});

/*
  Generates random card values from sequential values in array
*/

MatchGame.generateCardValues = function() {
  var sequentialValues = [];

  for (var value = 1; value <= 8; value++) {
    sequentialValues.push(value);
    sequentialValues.push(value);
  }

  var cardValues = [];

  while (sequentialValues.length > 0) {
    var randomIndex = Math.floor(Math.random() * sequentialValues.length);
    console.log(randomIndex);
    var randomValue = sequentialValues.splice(randomIndex, 1)[0];
    cardValues.push(randomValue);
  }

  console.log(cardValues);
  return cardValues;
};


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

    $game.empty();
    $game.data('flippedCards', []);

    for (var valueIndex = 0; valueIndex < cardValues.length; valueIndex++) {
      var value = cardValues[valueIndex];
      var color = colors[value - 1];
      var data = {
        value: value,
        color: color,
        isFlipped: false
      };

      var $card = $('<div class="card"></div');
      $card.data(data);
      $game.append($card);

      var $number = $('<h1>' + 1 + '</h1>')
      $card.append($number);
    };

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether tchey are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};

MatchGame.generateCardValues();
