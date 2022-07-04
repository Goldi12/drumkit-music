


$(".drum").on("click", function() {
  var buttoninnerHTML = this.innerHTML;
  musicPlay(buttoninnerHTML);
  buttonAniamtion(buttoninnerHTML);
});







function musicPlay(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();

    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();

    break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();

    break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();

    break;

    default:{
      console.log("got clicked");
    }


  }
}






$(document).keypress(function(event){
  musicPlay(event.key)
  buttonAniamtion(event.key)

})
function buttonAniamtion(currentKey){
$("." + currentKey).addClass("pressed");


setTimeout (function(){
  $("." + currentKey).removeClass("pressed")
},100);
  // activeButton.classList.add("pressed")
}
