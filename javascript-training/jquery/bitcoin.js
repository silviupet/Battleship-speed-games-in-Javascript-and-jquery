$(document).ready(function(){
  updateBitcoin();

});
function updateBitcoin() {
  $.getJSON('https://api.coindesk.com/v1/bpi/currentprice.json',
  function(data){
    $('#rate').html(data.bpi.EUR.rate);
    console.log(data.bpi.EUR.rate);
  }
).fail(function(){
  console.log('fail')
});
 setTimeout(updateBitcoin, 10000)
}
