$(document).ready(function() {
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
  //crating a function that allows us to click on a field
  $("td").on("click", function(){
    //so thatwhen we click on a field it changes color
    $(this).addClass("hitColor");
  });

});//end of doc ready function
