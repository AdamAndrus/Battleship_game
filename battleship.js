$(document).ready(function() {
  $("#revealButton").hide();
  //purpose: Creating a 10 x 10 grid using for loops to append columns to a row.
  //signature: take html elements of <tr> and <td> and loops to 10 to ultimately create a 10 x 10 grid.
  //example: function gameGrid() ----> 10 rows and columns in html file.
  function gameGrid(){
    //a function called gameGrid()
    for(var trIndex = 0; trIndex < 10; trIndex++){
      //for loop that makes 10 <tr>
      $("table").append("<tr></tr>");
      //appending <tr>'s
      for(var tdIndex = 0; tdIndex < 10; tdIndex++) {
        //for loop that makes 10 <td>
        // <td id="fakeID"></td>
        // "1" + 2 + 3
        $("tr").last().append('<td id="' + trIndex + tdIndex + '"></td>');
      }
    }
  };
  //calling gameGrid();
  gameGrid();
  //calling shipPlacement();
  shipPlacement();
  //crating a function that allows us to click on a field
  $("td").on("click", function(){
    //so that when we click on a field it changes color.
    //Declare variables rowIndex and columnIndex to equal the specific ID of the clicked field within the board. By saving the specific ID into these variables, we can store the location of the ship. rowIndex and columnIndex also stored the random location of the ships...which we can reference in the function shipPlacement() below. We are attributing the ID to the randomly placed ship within the clicked field.
    var rowIndex = $(this).attr("id");
    var columnIndex = $(this).attr("id");
    //When you click on a field with a ship, the field changes color, indicating the placement of the ship. IF there's a ship on the position that is clicked THEN change the color to hitColor (if statement).
    //check the variables against the board. If the board === 1 (SHIP) then hitColor red. If not...it's a miss (missColor = blue).
    if(board[rowIndex[0]][columnIndex[1]] === SHIP) {
      $(this).addClass("hitColor");
      shipHit = shipHit + 1;
    }
    //var topredos = 25. With every click you lose one torpedo.
    torpedosLeft = torpedosLeft - 1;
    //Grab the h4 element and add the current counter value.
    $("h3").text("Torpedos Left = " + torpedosLeft);
    $(this).off("click");
    //If the number of torpedosLeft equals 0, then disable clicks, run the loseMessage and show all ships on the board.
    if (torpedosLeft === 0 ) {
      $("td").off("click");

      $("#revealButton").show();

      $("#loseMessage").text("You have exhausted your arsenal. You have no more torpedos to launch. You can no longer sink enemy ships. You lose!");

      $("#revealButton").on("click", function() {
        for (rowIndex = 0; rowIndex < 10; rowIndex++){
          for (columnIndex = 0; columnIndex < 10; columnIndex++){
            if (board[rowIndex][columnIndex] === SHIP){
              $("#" + rowIndex + columnIndex).addClass("shipReveal");

            }
          }
        }
        // while (board[rowIndex[0]][columnIndex[1]] === SHIP){
        //   $("#" + rowIndex).addClass("shipReveal");
        // }

      });

    } else {
      $(this).addClass("missColor");
    }
    // //var topredos = 25. With every click you lose one torpedo.
    // torpedosLeft = torpedosLeft - 1;
    // //Grab the h4 element and add the current counter value.
    // $("h3").text("Torpedos Left = " + torpedosLeft);
    // $(this).off("click");
    // //If the number of torpedosLeft equals 0, then disable clicks, run the loseMessage and show all ships on the board.
    // if(torpedosLeft === 0 ) {
    //   $("td").off("click");
    //
    //   $("#loseMessage").text("You have exhausted your arsenal. You have no more torpedos to launch. You can no longer sink enemy ships. You lose!");
    //
    //   $("#button").on("click", function() {
    //     $(this).addClass("hitColor");
    // });
    //
    // }

    $("h4").text("Ship Hits = " + shipHit);
    $(this).off("click");

    if(shipHit === 5) {
      $("td").off("click");
      $("#winMessage").text("Congratulations! You are a true Destroyer of Ships. The 'Destroyer' was actually named after you. Fun Fact: The thing named after you is responsible for many deaths! You Win!");
    }



  }); //end of on click


});//end of doc ready function

var shipHit = 0
//global variables
//amount of torpedosLeft to start with
var torpedosLeft = 25;
//Ship is a cons
var SHIP = 1;
var shipCount = 0;
// game board variable in model format.
var board = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
//  function that calles a random location for shipPlacement.
function shipPlacement(){

  while (shipCount < 5) {
    var rowIndex = Math.floor(Math.random() * 10 );
    var columnIndex = Math.floor(Math.random() * 10 );
    board[rowIndex][columnIndex] = SHIP;
    shipCount = shipCount + 1;
  }

};
