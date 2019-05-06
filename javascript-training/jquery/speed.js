$(document).ready(function() {
    $('#startbtn').click(start);
});
var score = 0;
function start() {
  $('#startbtn').hide();
  showScore();
  newLetter();
  $(document).keypress(function(event){
// ne atasam la document
// din event ne extragem litere. o propr este key code (ascii)
// ezista o functoe care tr key code in litera lui
    var letter = String.fromCharCode(event.keyCode);
    $('.' + letter).animate(
      {'top': (screen.height - 200) + 'px'},
      'slow'

    );
    $('.' + letter).hide('slow',function() {
        $(this).remove();
        increaseScore();
    });
  });
}
function increaseScore() {
  score +=1;
  showScore();
}



function showScore() {
  $('#score').text('Score: ' + score);
}
function newLetter() {
  var letter = randomLetter();
  var x = randomPosition(screen.width - 20);
  var y = randomPosition(screen.height - 200);
  div = $('<div></div>')
          .text(letter)
          .css('top', y + 'px')
          .css('left', x + 'px')
          .css('background-color' , randomColor())
          .attr('class', 'letter ' + letter);
  $('body').append(div);
  setTimeout(newLetter, 3000);
}
function randomLetter() {
  var code = Math.floor(Math.random() * 26 + 65);
  var letter = String.fromCharCode(code);
  return letter;
}
function randomPosition(max) {
  return Math.floor(Math.random() * max);
}
function randomColor() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  return "rgb(" + red + "," + green + "," + blue + ")"
}
