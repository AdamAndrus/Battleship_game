//jquery object that creates the document that loads pages when ready.
$(document).ready(function() {
  //hides our reveal button when page loads.
  $("#revealButton").hide();
  //hides hits reveal button when page loads.
  $("#hits").hide();
  //hides our Torpedos Left tag when page loads.
  $("#left").hide();
  //hidng our gitHub links
  $("#gitHub").hide();

  //purpose: Creating a 10 x 10 grid using for loops to append columns to a row.
  //signature: take html elements of <tr> and <td> and loops to 10 to ultimately create a 10 x 10 grid.
  //example: function gameGrid() ----> 10 rows and columns in html file.
  function gameGrid(){
    $("table").hide();
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
  //when we click the Are you ready Button, it loads the grid.
  $("#gridButton").on("click", function(){
    //when we click the Are you ready Button, it loads the table.
    $("table").fadeTo(1000, 1);
    //when you hit the button, it hides the button.
    $("#gridButton").hide();
    //when you hit the button the hits and left ID's reveal in one second to 100% visibility.
    $("#hits").fadeTo(1000, 1);
    $("#left").fadeTo(1000, 1);
    $("#gitHub").fadeTo(1000, 1);
  });
  //calling gameGrid(); function below.
  gameGrid();
  //calling shipPlacement(); function below.
  shipPlacement();
  //creating a function that allows us to click on a field
  $("td").on("click", function(){
    //so that when we click on a field it changes color.
    //Declare variables rowIndex and columnIndex to equal the specific ID of the clicked field within the board. By saving the specific ID into these variables, we can store the location of the ship. rowIndex and columnIndex also stored the random location of the ships...which we can reference in the function shipPlacement() below. We are attributing the ID to the randomly placed ship within the clicked field.


    //we're storing attributed ID's to indexes in the rows and columns.
    var rowIndex = $(this).attr("id");
    var columnIndex = $(this).attr("id");

    //check the row and column variables against the board. If the board === 1 (SHIP) then hitColor red. If not...it's a miss (missColor = blue). When you hit a field with a ship the screen shakes.

    if(board[rowIndex[0]][columnIndex[1]] === SHIP) {
      $(this).addClass("hitColor");
      shipHit = shipHit + 1;
      $("table").effect( "shake", {times:4}, 1000 );

    }
    //var topredos = 25. With every click you lose one torpedo.
    torpedosLeft = torpedosLeft - 1;
    //Grab the h4 element and add the current counter value.
    $("h3").text("Torpedos Left = " + torpedosLeft);
    $(this).off("click");
    //If the number of torpedosLeft equals 0, then disable clicks, run the loseMessage and show all ships on the board.
    if (torpedosLeft === 0 ) {
      $("td").off("click");
      //when torpedos === 0, show the ships reveal button.
      $("#revealButton").show();
      //when torpedos === 0, show the text of the lose message.
      $("#loseMessage").text("You have exhausted your arsenal. You have no more torpedos to launch. You can no longer sink enemy ships. You lose!");


      //when you click on the reveal button, loop through the board to look for randomly places ships, which = SHIP = 1. When found, show color of ship.
      $("#revealButton").on("click", function() {
        // if rowIndex is less than 10, check through all the indexes.
        for (rowIndex = 0; rowIndex < 10; rowIndex++){
          for (columnIndex = 0; columnIndex < 10; columnIndex++){
            //if the loop reveals a SHIP on an index...then load shipReveal color.
            if (board[rowIndex][columnIndex] === SHIP){
              $("#" + rowIndex + columnIndex).addClass("shipReveal");

            }
          }
        }
      });
      //otherwise, load the missColor.
    } else {
      $(this).addClass("missColor");
    }
    //this adds the text below to the <h4> tag on the browser.
    $("h4").text("Ship Hits = " + shipHit);
    $(this).off("click");
    //when the ships you've hit = five, load the message. 
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
