$(document).ready(function(){

  shake(boggleDice);
  var board = createBoard(letters);
  $("#board").html(board);
  var wordBuilder = "";

  $(document).on("click", "#submit", function(){
    $("#scores").append('<tr><td>' + wordBuilder + '</td><td>' + wordBuilder.length.toString() + '</td></tr>');
    wordBuilder = "";
  });

  $("#board td").click(function(){
    wordBuilder += $(this).text();
    $(this).addClass("total");
    var currentWord = document.getElementById("current");
    currentWord.innerHTML = "Current Word: " + wordBuilder;
  });
});
