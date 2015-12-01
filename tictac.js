//assigning canvas to buttons
var button = [];
for(var i = 1; i < 10; i++) button[i] = document.getElementById('canvas'+i);
//assigning buttons to context to allow the ability to draw an 'X' and "O"
var context = [];
for(var i = 1; i < 10; i++) context[i] = button[i].getContext('2d');
//creating a variable to determine if buttons has been clicked
var disabled = [];
for(var i = 1; i < 10; i++) disabled[i] = false;

//variable that will determine to allow additional click on canvas
var result = false;
//storing content of click 
var content = [];

// function being called upon when user clicks on a Canvas using the numbers assigned in html
function clicked(x) 
{
  
  //if button is disabled 
  if(!disabled[x] && !result)
  {
        disabled[x] = true;
        button[x].style.opacity = 0.6;
        content[x] = 'x';
        //creates animation for chrome involving the rotation of the canvas (flip)
        button[x].style.webkitTransform = "rotateY(180deg)";

      
      //created the "X" in canvas of button clicked
      setTimeout(function()
      {

          context[x].lineWidth = 4;
          context[x].beginPath();
          context[x].moveTo(20,20);
          context[x].lineTo(80,80);
          context[x].moveTo(80,20);
          context[x].lineTo(20,80);
          context[x].strokeStyle="white";
          context[x].stroke();
          context[x].closePath();
          checkWinner();
          computerTurn();

      }, 300);
    
    }
  
}

//computerTurn ran after user has clicked a canvas
function computerTurn()
{
    //if results have not been set to true in checkWinner, randomize to canvas number if button has not been disabled
    if(!result)
    {
    var rand = Math.random();

    if (rand < 0.1 && !disabled[1]) drawO(1);
    else if (rand < 0.2 && !disabled[2]) drawO(2);
    else if (rand < 0.3 && !disabled[3]) drawO(3);
    else if (rand < 0.4 && !disabled[4]) drawO(4);
    else if (rand < 0.5 && !disabled[5]) drawO(5);
    else if (rand < 0.6 && !disabled[6]) drawO(6);
    else if (rand < 0.7 && !disabled[7]) drawO(7);
    else if (rand < 0.8 && !disabled[8]) drawO(8);
    else if (rand < 0.9 && !disabled[9]) drawO(9);
    else computerTurn();
    }
}

//Drawing of the "O"
function drawO(x)
{
    setTimeout(function()
    {
    disabled[x] = true;
    button[x].style.opacity = 0.6;
    button[x].style.webkitTransform = "rotateY(180deg)";
    content[x] = 'o';
    }, 600);

    setTimeout(function()
    {
        context[x].beginPath();
        context[x].lineWidth = 4;
        context[x].arc(50,50,34,0, Math.PI*2,false);
        context[x].strokeStyle = "white";
        context[x].stroke();
        context[x].closePath();
        checkWinner();
    }, 900);

}

// checking for Winner through if statement, iterating over the possiblities and calling showWinner with string 
// passing through stating whether user won or lost
function checkWinner()
{

        if(!result)
        { 
            if(content[1] == 'x' && content[2] == 'x' && content[3] == 'x') showWinner("You Win!");
            else if(content[4] == 'x' && content[5] == 'x' && content[6] == 'x') showWinner("You Win!");
            else if(content[7] == 'x' && content[8] == 'x' && content[9] == 'x') showWinner("You Win!");
            else if(content[1] == 'x' && content[4] == 'x' && content[7] == 'x') showWinner("You Win!");
            else if(content[2] == 'x' && content[5] == 'x' && content[8] == 'x') showWinner("You Win!");
            else if(content[3] == 'x' && content[6] == 'x' && content[9] == 'x') showWinner("You Win!");
            else if(content[1] == 'x' && content[5] == 'x' && content[9] == 'x') showWinner("You Win!");
            else if(content[3] == 'x' && content[5] == 'x' && content[7] == 'x') showWinner("You Win!");

            else if(content[1] == 'o' && content[2] == 'o' && content[3] == 'o') showWinner("You Lose!");
            else if(content[4] == 'o' && content[5] == 'o' && content[6] == 'o') showWinner("You Lose!");
            else if(content[7] == 'o' && content[8] == 'o' && content[9] == 'o') showWinner("You Lose!");
            else if(content[1] == 'o' && content[4] == 'o' && content[7] == 'o') showWinner("You Lose!");
            else if(content[2] == 'o' && content[5] == 'o' && content[8] == 'o') showWinner("You Lose!");
            else if(content[3] == 'o' && content[6] == 'o' && content[9] == 'o') showWinner("You Lose!");
            else if(content[1] == 'o' && content[5] == 'o' && content[9] == 'o') showWinner("You Lose!");
            else if(content[3] == 'o' && content[5] == 'o' && content[7] == 'o') showWinner("You Lose!");
            //Possiblities for a draw, showWinner called and string "draw" passed
            else if(
              (content[1]=='x' || content[1]=='o') &&
              (content[2]=='x' || content[2]=='o') &&
              (content[3]=='x' || content[3]=='o') &&
              (content[4]=='x' || content[4]=='o') &&
              (content[5]=='x' || content[5]=='o') &&
              (content[6]=='x' || content[6]=='o') &&
              (content[7]=='x' || content[7]=='o') &&
              (content[8]=='x' || content[8]=='o') &&
              (content[9]=='x' || content[9]=='o') 
            )
            showWinner("Draw!")
        }
}

//Shows winner with params accepting string to alert on browser
//Setting result to true to not allow additional moves to be played
function showWinner(x)
{
    alert(x);
    result = true;
}

