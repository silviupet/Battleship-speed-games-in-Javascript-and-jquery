$(document).ready(function(){
  newFact();
  $('button').click(newFact);
  $('#explode').click(explodeFact);
  function explodeFact(){
    $('#fact').effect('explode');
  }

});
function newFact() {
  $.getJSON('http://api.icndb.com/jokes/random',
  function(data){
    $('#fact').html(data.value.joke);
    $('#fact').effect('slide');

  }
).fail(function(){
  console.log('fail')
});
 // setTimeout(updateBitcoin, 10000)
}
