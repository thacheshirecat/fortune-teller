$(document).ready(function(){

$("#luck-input").submit(function(event) {
  event.preventDefault();

  var badLuckScore = 0;
  var goodLuckScore = 0;

  $("input:checkbox[name=bad-luck-input]:checked").each(function(){
      var badLuck = parseInt($(this).val());
      badLuckScore = badLuckScore + badLuck;
    });
  $("input:checkbox[name=good-luck-input]:checked").each(function(){
      var goodLuck = parseInt($(this).val());
      goodLuckScore = goodLuckScore + goodLuck;
    });

    if (badLuckScore === 6) {
      $("#your-fortune").text("Please don't touch me! Your luck is unbelievably bad right now and I am going to need you to leave before there is collateral damage. Get out!!!!");
    } else if (badLuckScore > goodLuckScore) {
      $("#your-fortune").text("Things aren't looking good for you. I would stock up on genuine rabbits foot and consider (even if you have already in the past year) visiting the Blarney stone for some spider-man action.");
    } else if (badLuckScore < goodLuckScore) {
      $("#your-fortune").text("Wow, huh.... Jeez, better than expected, you sure you answered these honestly? Alright well enjoy your good luck...");
    } else {
      $("#your-fortune").text("It could go either way.");
    };
    $("#your-fortune").fadeIn();
});

});
