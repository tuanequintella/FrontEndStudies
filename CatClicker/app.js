$(document).ready(function() { 

  cat1Name = "Felix"
  cat2Name = "George"

  $('#cat1-name').text(cat1Name);
  $('#cat2-name').text(cat2Name);

  $('#cat1').click(function(){
    clicks = Number($('#counter1').text());
    clicks = clicks + 1;
    $('#counter1').text(clicks.toString());
  });

  $('#cat2').click(function(){
    clicks = Number($('#counter2').text());
    clicks = clicks + 1;
    $('#counter2').text(clicks.toString());
  });

 });

