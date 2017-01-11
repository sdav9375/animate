$(function() {

  $('#left').click(function() {
    console.log("i was clicked!")
    $('#box').animate({
      left: "-=40px"
    }, function() {
    });
  });

  $('#right').click(function() {
    console.log("i was clicked!")
    $('#box').animate({
      left: "+=40px"
    }, function() {
    });
  });

  $('#up').click(function() {
    console.log("i was clicked!")
    $('#box').animate({
      top: "-=40px"
    }, function() {
    });
  });

  $('#down').click(function() {
    console.log("i was clicked!")
    $('#box').animate({
      top: "+=40px"
    }, function() {
    });
  });




});
