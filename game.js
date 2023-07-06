var buttonColours=['red','blue','green','yellow'];

var gamePattern=[];
var userClickedPattern=[];

var started=false;
level=0;

$(document).keypress(function() {
    if (!started) {
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

function nextSequence()
{ 
    userClickedPattern = [];
    level++;
    var randomNO=Math.round(Math.random()*3);
    console.log(randomNO)
    var ran = buttonColours[randomNO];
    gamePattern.push(ran);

    $("#" + ran).fadeIn(100).fadeOut(100).fadeIn(100);
}


$(".btn").click(function(){
   var userChosenColour=$(this).attr("id");
   userClickedPattern.push(userChosenColour);

   checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
      $('h1').text("game over")
    }
}

for(var i=0; i<document.querySelectorAll(".btn").length;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var letter=this.innerHTML;
        console.log(letter);
        if(letter===letter){
            document.querySelector("."+letter).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+letter).classList.remove("pressed");

            },100);
        }

       
    });
}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  



// for(var i=0;i<document.querySelectorAll(".btn").length;i++){
//     document.querySelectorAll(".btn")[i].addEventListener("click",function(){
//      var a= this.innerHTML;
//      console.log(a);
//       document.querySelector("."+a).classList.add("red");
//     // document.querySelectorAll(".btn")[i].classList.add("red");
//       });}
   
      